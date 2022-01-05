#!/usr/bin/env bash
#
# Patches the SPL crates for developing against a local safecoin monorepo
#

safecoin_dir=$1
if [[ -z $safecoin_dir ]]; then
  echo "Usage: $0 <path-to-safecoin-monorepo>"
  exit 1
fi

workspace_crates=(
  Cargo.toml
  themis/client_ristretto/Cargo.toml
)

if [[ ! -r "$safecoin_dir"/scripts/read-cargo-variable.sh ]]; then
  echo "$safecoin_dir is not a path to the safecoin monorepo"
  exit 1
fi

set -e

safecoin_dir=$(cd "$safecoin_dir" && pwd)
cd "$(dirname "$0")"

source "$safecoin_dir"/scripts/read-cargo-variable.sh
safecoin_ver=$(readCargoVariable version "$safecoin_dir"/sdk/Cargo.toml)

echo "Patching in $safecoin_ver from $safecoin_dir"
echo
for crate in "${workspace_crates[@]}"; do
  if grep -q '\[patch.crates-io\]' "$crate"; then
    echo "$crate is already patched"
  else
    cat >> "$crate" <<PATCH
[patch.crates-io]
safecoin-account-decoder = {path = "$safecoin_dir/account-decoder" }
safecoin-banks-client = { path = "$safecoin_dir/banks-client"}
safecoin-banks-server = { path = "$safecoin_dir/banks-server"}
safecoin-bpf-loader-program = { path = "$safecoin_dir/programs/bpf_loader" }
safecoin-clap-utils = {path = "$safecoin_dir/clap-utils" }
safecoin-cli-config = {path = "$safecoin_dir/cli-config" }
safecoin-cli-output = {path = "$safecoin_dir/cli-output" }
safecoin-client = { path = "$safecoin_dir/client"}
safecoin-core = { path = "$safecoin_dir/core"}
safecoin-logger = {path = "$safecoin_dir/logger" }
safecoin-notifier = { path = "$safecoin_dir/notifier" }
safecoin-remote-wallet = {path = "$safecoin_dir/remote-wallet" }
safecoin-program = { path = "$safecoin_dir/sdk/program" }
safecoin-program-test = { path = "$safecoin_dir/program-test" }
safecoin-runtime = { path = "$safecoin_dir/runtime" }
safecoin-sdk = { path = "$safecoin_dir/sdk" }
safecoin-stake-program = { path = "$safecoin_dir/programs/stake" }
safecoin-transaction-status = { path = "$safecoin_dir/transaction-status" }
safecoin-vote-program = { path = "$safecoin_dir/programs/vote" }
PATCH
  fi
done

./update-safecoin-dependencies.sh "$safecoin_ver"

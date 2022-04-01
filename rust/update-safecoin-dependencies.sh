#!/usr/bin/env bash
#
# Updates the safecoin version in all the SPL crates
#

safecoin_ver=$1
if [[ -z $safecoin_ver ]]; then
  echo "Usage: $0 <new-safecoin-version>"
  exit 1
fi

cd "$(dirname "$0")"

declare tomls=()
while IFS='' read -r line; do tomls+=("$line"); done < <(find . -name Cargo.toml)

crates=(
  safecoin-account-decoder
  safecoin-banks-client
  safecoin-banks-server
  safecoin-bpf-loader-program
  safecoin-clap-utils
  safecoin-cli-config
  safecoin-cli-output
  safecoin-client
  safecoin-core
  safecoin-logger
  safecoin-notifier
  safecoin-program
  safecoin-program-test
  safecoin-remote-wallet
  safecoin-runtime
  safecoin-sdk
  safecoin-stake-program
  safecoin-transaction-status
  safecoin-vote-program
)

set -x
for crate in "${crates[@]}"; do
  sed -i -e "s#\(${crate} = \"\)\(=\?\).*\(\"\)#\1\2$safecoin_ver\3#g" "${tomls[@]}"
done

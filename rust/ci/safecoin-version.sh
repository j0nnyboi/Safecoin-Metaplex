#
# This file maintains the safecoin versions for use by CI.
#
# Obtain the environment variables without any automatic updating:
#   $ source ci/safecoin-version.sh
#
# Obtain the environment variables and install update:
#   $ source ci/safecoin-version.sh install

# Then to access the safecoin version:
#   $ echo "$safecoin_version"
#

if [[ -n $safecoin_VERSION ]]; then
  safecoin_version="$safecoin_VERSION"
else
  safecoin_version=v1.7.17
fi

export safecoin_version="$safecoin_version"
export safecoin_docker_image=safecoinlabs/safecoin:"$safecoin_version"
export PATH="$HOME"/.local/share/safecoin/install/active_release/bin:"$PATH"

if [[ -n $1 ]]; then
  case $1 in
  install)
    sh -c "$(curl -sSfL https://release.safecoin.org/$safecoin_version/install)"
    safecoin --version
    ;;
  *)
    echo "$0: Note: ignoring unknown argument: $1" >&2
    ;;
  esac
fi

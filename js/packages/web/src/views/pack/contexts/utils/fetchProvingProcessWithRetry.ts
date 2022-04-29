import {
  getUnixTs,
  ParsedAccount,
  sleep,
  StringPublicKey,
} from '@j0nnyboi/common';
import {
  getProvingProcessByPubkey,
  ProvingProcess,
} from '@j0nnyboi/common/dist/lib/models/packs/accounts/ProvingProcess';
import { Connection } from '@safecoin/web3.js';

interface FetchProvingProcessWithRetryParams {
  provingProcessKey: StringPublicKey;
  connection: Connection;
}

const SLEEP_TIMEOUT = 300;
const REQUEST_TIMEOUT = 15000;

export const fetchProvingProcessWithRetry = async ({
  provingProcessKey,
  connection,
}: FetchProvingProcessWithRetryParams): Promise<
  ParsedAccount<ProvingProcess>
> => {
  let provingProcess;
  const startTime = getUnixTs();

  while (!provingProcess && getUnixTs() - startTime < REQUEST_TIMEOUT) {
    try {
      provingProcess = await getProvingProcessByPubkey(
        connection,
        provingProcessKey,
      );
    } catch {
      // skip
    }

    await sleep(SLEEP_TIMEOUT);
  }

  return provingProcess;
};

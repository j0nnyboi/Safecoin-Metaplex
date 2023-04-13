import { Amman } from '@j0nnyboi/amman-client';
import { cusper } from '../utils/errors';

import { PROGRAM_ADDRESS } from '../../src/generated';
import { logDebug } from '.';

export const amman = Amman.instance({
  knownLabels: { [PROGRAM_ADDRESS]: 'Hydra' },
  log: logDebug,
  errorResolver: cusper,
});

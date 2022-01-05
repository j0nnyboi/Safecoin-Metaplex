import EventEmitter from 'event-emitter';

import { Magic } from 'magic-sdk';
import { safecoinExtension } from '@magic-ext/safecoin';

const events = new EventEmitter();
// let MagicSDK = null;
// let script = null;
let sdk = null;

export default async function loadMagicLink(key, endpoint) {
  const options = {
    extensions: {
      safecoin: new safecoinExtension({
        rpcUrl: endpoint,
      }),
    },
  };

  if (sdk) {
    return sdk;
  }

  if (key && endpoint && Magic) {
    sdk = new Magic(key, options);
    return sdk;
  }

  // if (!script) {
  //     script = window.document.createElement('script');
  //     script.async = true;
  //     script.src = 'https://cdn.jsdelivr.net/npm/magic-sdk/dist/magic.js';
  //     script.id = 'magic-link-sdk';
  //     script.onload = () => {
  //         MagicSDK = window.Magic;
  //         events.emit('loaded');
  //     }

  //     document.head.appendChild(script);
  // }

  if (!key) {
    return;
  }

  return new Promise(resolve => {
    if (sdk) {
      resolve(sdk);
      return;
    }

    sdk = new Magic(key, options);
    resolve(sdk);
  });
}

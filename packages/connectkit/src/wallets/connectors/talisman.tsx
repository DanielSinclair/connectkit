import { WalletProps } from '../wallet';

import Logos from '../../assets/logos';

import { isTalisman } from '../../utils/wallets';

export const talisman = (): WalletProps => {
  const isInstalled = isTalisman();

  return {
    id: 'talisman',
    name: 'Talisman',
    shortName: 'Talisman',
    scannable: false,
    logos: {
      default: <Logos.Talisman />,
    },
    downloadUrls: {
      download: 'https://talisman.xyz/download',
      website: 'https://talisman.xyz',
      chrome:
        'https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld',
      firefox:
        'https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/',
    },
    installed: isInstalled,
  };
};

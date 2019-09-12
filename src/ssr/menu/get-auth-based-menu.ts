import rp from 'request-promise';
import createLogger from '../../utils/create-logger';

import createFakeMenu from './create-fake-menu';

type SsrMenuType = {
  proxyUrl: string;
};

export default async function getAuthBasedMenu({ proxyUrl }: SsrMenuType) {
  const logger = createLogger({
    proxyUrl,
  });

  try {
    const menu = await rp(`${proxyUrl}/sedmax/web/ui/menu.html`);

    if (menu === 'Unknown Pattern') {
      throw Error('noSsrMenu');
    }

    return menu;
  } catch (e) {
    if (e.message === 'noSsrMenu') {
      logger.canNotFindMenu();
    } else {
      logger.canNotFindProxy();
    }

    return createFakeMenu({ proxyUrl });
  }
}

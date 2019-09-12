import { hostname, networkInterfaces } from 'os';
import chalk from 'chalk';
import boxen from 'boxen';

import compose from './compose';

export default function createLogger({
  publicUrl = '',
  proxyUrl = '',
  menuUrl = '',
}) {
  const { log } = console;

  const customBoxen = customizeBoxen({
    // TODO: fix the typings.
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore TS2322
    borderStyle: 'double',
    borderColor: 'cyan',
    padding: 1,
    align: 'right',
  });

  const {
    Ethernet: [, { address }],
  } = networkInterfaces();

  const colorizeIp = chalk.yellow;

  const colorizeError = chalk.red;

  const colorizeInfo = chalk.cyanBright;

  const colorizeUrl = chalk.blueBright.underline.bold;

  const ip = colorizeIp(address);

  const menu = colorizeUrl(menuUrl);

  const host = colorizeUrl(`http://${hostname}/`);

  const app = colorizeUrl(`http://localhost${publicUrl}/index`);

  const proxy = colorizeUrl(proxyUrl);

  const happyHacking = () => {
    // Helps with parcel runtime messages spacing.
    log('');

    compose(
      log,
      customBoxen,
      colorizeInfo,
    )(`Happy hacking at ${app}`);
  };

  const shareDevServer = () => {
    compose(
      log,
      customBoxen,
      colorizeInfo,
    )(`Feel free to share development server at ${ip} a.k.a. ${host}`);
  };

  const canNotFindProxy = () => {
    compose(
      log,
      customBoxen,
      colorizeError,
    )(`Looks like ${proxy} is busy or switched off`);
  };

  const canNotFindMenu = () => {
    compose(
      log,
      customBoxen,
      colorizeError,
    )(`External menu problems, there is no such endpoint ${menu}`);
  };

  return {
    happyHacking,
    shareDevServer,
    canNotFindMenu,
    canNotFindProxy,
  };
}

function customizeBoxen(options: boxen.Options) {
  return (text: string) => boxen(text, options);
}

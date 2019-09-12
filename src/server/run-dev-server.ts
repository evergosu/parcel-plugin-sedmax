import express from 'express';
import Bundler from 'parcel-bundler';
import compression from 'compression';
import proxy from 'http-proxy-middleware';

import createLogger from '../utils/create-logger';

type ServerOptions = {
  publicUrl: string;
  proxyUrl: string;
  port: number;
};

export default function runDevServer({
  publicUrl,
  proxyUrl,
  port,
}: ServerOptions) {
  return (bundler: Bundler) => {
    const logger = createLogger({ publicUrl });

    express()
      .use(
        proxy(['**', `!${publicUrl}/**/*`], {
          target: proxyUrl,
          changeOrigin: true,
          ws: true,
        }),
      )
      .use(compression())
      .use(bundler.middleware())
      .listen(port, () => {
        logger.happyHacking();

        logger.shareDevServer();
      });
  };
}

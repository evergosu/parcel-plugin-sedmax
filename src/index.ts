import runDevServer from './server/run-dev-server';
import createBundler from './bundler/create-bundler';
import getAuthBasedMenu from './ssr/menu/get-auth-based-menu';
import insertMenuToTemplate from './ssr/menu/insert-menu-to-template';
import applyRootsToImages from './bundler/plugins/root-syntax/apply-roots-to-images';

import compose from './utils/compose';
import getCopy from './utils/fs/get-copy';
import saveFileTo from './utils/fs/save-file-to';

type ServeOptions = {
  entryPath: string;
  tempPath: string;
  publicUrl: string;
  proxyUrl: string;
  port: number;
};

export default async function serve({
  entryPath,
  tempPath,
  publicUrl,
  proxyUrl,
  port,
}: ServeOptions) {
  const template = getCopy({ entryPath, tempPath });

  const menu = await getAuthBasedMenu({ proxyUrl });

  compose(
    runDevServer({ publicUrl, proxyUrl, port }),
    createBundler({ publicUrl }),
    saveFileTo(tempPath),
    applyRootsToImages,
    insertMenuToTemplate,
  )({ menu, template });
}

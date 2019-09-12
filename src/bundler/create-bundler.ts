import fs from 'fs-extra';
import Bundler from 'parcel-bundler';

import forEachBundle from './utils/for-each-bundle';
import removeRootSyntax from './plugins/root-syntax/remove-root-syntax';

export default function createBundler({ publicUrl }: Bundler.ParcelOptions) {
  return (path: string) => {
    const bundler = new Bundler(path, { publicUrl });

    bundler.on('bundled', bundle => {
      forEachBundle(applyRootSyntaxPlugin, bundle);
    });

    return bundler;
  };
}

function applyRootSyntaxPlugin({ type, name: filePath }: Bundler.ParcelBundle) {
  if (type === 'html') {
    const html = fs.readFileSync(filePath, 'utf8');

    fs.writeFileSync(filePath, removeRootSyntax(html));
  }
}

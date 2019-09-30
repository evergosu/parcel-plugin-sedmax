import fs from 'fs-extra';

export default function moveAuthConfig() {
  fs.copySync(process.env.npm_package_assetsPath || 'assets', './.dist/');
}

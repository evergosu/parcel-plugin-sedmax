import fs from 'fs-extra';

export default function moveAuthConfig() {
  fs.copySync('./auth.json', './.dist/urls.json');
}

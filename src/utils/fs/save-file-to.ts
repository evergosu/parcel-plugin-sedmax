import fs from 'fs-extra';

export default function saveFileTo(path: string) {
  return (data: string) => {
    fs.writeFileSync(path, data);

    return path;
  };
}

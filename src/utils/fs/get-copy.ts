import fs from 'fs-extra';

type CopyType = {
  entryPath: string;
  tempPath: string;
};

export default function getCopy({ entryPath, tempPath }: CopyType) {
  fs.copySync(entryPath, tempPath);

  const rawCopy = fs.readFileSync(tempPath, 'utf8');

  /**
   * TODO: think about converting to new plugin to prevent issues with hardcode.
   */
  const html = rawCopy.replace(/src="index.tsx"/g, 'src="../src/index.tsx"');

  return html;
}

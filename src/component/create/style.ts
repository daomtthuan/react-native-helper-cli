import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from '../../constants/path';

export const createScssStyleFile = (componentDir: string, fileName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/style/scss.txt');
  const template = readFileSync(templateFilePath).toString();

  const styleFilePath = resolve(componentDir, `${fileName}.style.scss`);
  writeFileSync(styleFilePath, template);
};

export const createStyleSheetStyleFile = (componentDir: string, fileName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/style/style-sheet.txt');
  const template = readFileSync(templateFilePath).toString();

  const styleFilePath = resolve(componentDir, `${fileName}.style.ts`);
  writeFileSync(styleFilePath, template);
};

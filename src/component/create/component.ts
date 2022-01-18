import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from '../../constants/path';

export const createScssStyleComponentFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/component/scss.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName)
    .replace(/__FILE_NAME__/g, fileName);

  const componentFilePath = resolve(componentDir, `${fileName}.component.tsx`);
  writeFileSync(componentFilePath, template);
};

export const createStyleSheetStyleComponentFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/component/style-sheet.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName)
    .replace(/__FILE_NAME__/g, fileName);

  const componentFilePath = resolve(componentDir, `${fileName}.component.tsx`);
  writeFileSync(componentFilePath, template);
};

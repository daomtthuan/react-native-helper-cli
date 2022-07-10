import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from '../../constants/path';

/** Style Type */
export enum StyleType {
  CSS = 'css',
  SCSS = 'scss',
  SASS = 'sass',
}

/**
 * Create Style file
 * @param componentDir Component directory
 * @param fileName Component file name
 * @param type Style type
 */
export const createStyleFile = (componentDir: string, fileName: string, type: StyleType) => {
  const templateFilePath = resolve(ROOT, `./templates/component/create/style/${type}.txt`);
  const template = readFileSync(templateFilePath).toString();

  const styleFilePath = resolve(componentDir, `${fileName}.style.${type}`);
  writeFileSync(styleFilePath, template);
};

export const createStyleSheetStyleFile = (componentDir: string, fileName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/style/style-sheet.txt');
  const template = readFileSync(templateFilePath).toString();

  const styleFilePath = resolve(componentDir, `${fileName}.style.ts`);
  writeFileSync(styleFilePath, template);
};

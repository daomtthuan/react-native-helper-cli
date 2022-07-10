import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from '../../constants/path';
import { StyleType } from './style';

/**
 * Create Component file with style
 * @param componentDir Component directory
 * @param fileName Component file name
 * @param componentName Component name
 * @param styleType Style type
 */
export const createStyleComponentFile = (
  componentDir: string,
  fileName: string,
  componentName: string,
  styleType: StyleType,
) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/component/style.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName)
    .replace(/__FILE_NAME__/g, fileName)
    .replace(/__STYLE_TYPE__/g, styleType);

  const componentFilePath = resolve(componentDir, `${fileName}.component.tsx`);
  writeFileSync(componentFilePath, template);
};

/**
 * Create Component file with StyleSheet
 * @param componentDir Component directory
 * @param fileName Component file name
 * @param componentName Component name
 */
export const createStyleSheetStyleComponentFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/component/style-sheet.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName)
    .replace(/__FILE_NAME__/g, fileName);

  const componentFilePath = resolve(componentDir, `${fileName}.component.tsx`);
  writeFileSync(componentFilePath, template);
};

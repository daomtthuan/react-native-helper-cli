import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { ROOT } from '../../constants/path';

/**
 * Create Default Type file
 * @param componentDir Component directory
 * @param fileName Component file name
 * @param componentName Component name
 */
export const createDefaultTypeFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(ROOT, './templates/component/create/type/default.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName);

  const typeFilePath = resolve(componentDir, `${fileName}.type.ts`);
  writeFileSync(typeFilePath, template);
};

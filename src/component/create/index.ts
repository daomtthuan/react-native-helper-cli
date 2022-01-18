import { existsSync, mkdirSync, rmSync } from 'fs';
import Inquirer from 'inquirer';
import { resolve } from 'path';

import { createScssStyleComponentFile, createStyleSheetStyleComponentFile } from './component';
import { createDefaultExportFile } from './export';
import { createScssStyleFile, createStyleSheetStyleFile } from './style';
import { createDefaultTypeFile } from './type';

enum StylesheetType {
  scss = 'SCSS',
  StyleSheet = 'StyleSheet',
}

export const createComponent = async () => {
  const { dir, fileName, componentName, type, style } = await Inquirer.prompt([
    {
      type: 'input',
      name: 'dir',
      message: 'Directory:',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'File name:',
    },
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name:',
    },
    {
      type: 'list',
      name: 'style',
      message: 'Stylesheet type?',
      choices: Object.values(StylesheetType),
      default: StylesheetType.scss,
    },
  ]);

  if (!existsSync(dir)) {
    console.error('Directory not exists');
    return;
  }

  const componentDir = resolve(dir, fileName);
  if (existsSync(componentDir)) {
    const { override } = await Inquirer.prompt({
      type: 'confirm',
      name: 'override',
      message: 'Component already exists. Override?',
      default: false,
    });

    if (!override) {
      return;
    }
    rmSync(componentDir, { recursive: true });
  }
  mkdirSync(componentDir);

  switch (style) {
    case StylesheetType.scss:
      createScssStyleComponentFile(componentDir, fileName, componentName);
      createScssStyleFile(componentDir, fileName);
      break;

    case StylesheetType.StyleSheet:
      createStyleSheetStyleComponentFile(componentDir, fileName, componentName);
      createStyleSheetStyleFile(componentDir, fileName);
      break;
  }

  createDefaultTypeFile(componentDir, fileName, componentName);

  createDefaultExportFile(componentDir, fileName);
};

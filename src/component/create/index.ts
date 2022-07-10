import { existsSync, mkdirSync, rmSync } from 'fs';
import Inquirer from 'inquirer';
import { resolve } from 'path';

import { createStyleComponentFile, createStyleSheetStyleComponentFile } from './component';
import { createDefaultExportFile } from './export';
import { createStyleFile, createStyleSheetStyleFile, StyleType } from './style';
import { createDefaultTypeFile } from './type';

/** StyleSheet Type */
enum StylesheetType {
  CSS = 'CSS',
  SCSS = 'SCSS',
  SASS = 'SASS',
  StyleSheet = 'StyleSheet (React Native)',
}

/**
 * Create Component
 */
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
      default: StylesheetType.CSS,
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

  if (style == StylesheetType.StyleSheet) {
    createStyleSheetStyleComponentFile(componentDir, fileName, componentName);
    createStyleSheetStyleFile(componentDir, fileName);
  } else {
    let styleType = StyleType.CSS;
    switch (style) {
      case StylesheetType.SCSS:
        styleType = StyleType.SCSS;
        break;

      case StylesheetType.SASS:
        styleType = StyleType.SASS;
        break;
    }

    createStyleComponentFile(componentDir, fileName, componentName, styleType);
    createStyleFile(componentDir, fileName, styleType);
  }

  createDefaultTypeFile(componentDir, fileName, componentName);

  createDefaultExportFile(componentDir, fileName);
};

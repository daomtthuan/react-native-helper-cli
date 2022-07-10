import Inquirer from 'inquirer';

import { executeComponentGroupAction } from '../component';
import { BREAK_LINE } from '../constants/ui';

/** Action Group of CLI */
enum ActionGroup {
  component = 'Component',
  exit = 'Exit',
}

/**
 * Execute CLI
 */
export const execute = async function () {
  let exit = false;
  while (!exit) {
    console.log(BREAK_LINE);
    const { actionGroup } = await Inquirer.prompt({
      type: 'list',
      name: 'actionGroup',
      message: 'Action group?',
      choices: Object.values(ActionGroup),
      default: ActionGroup.exit,
    });

    switch (actionGroup) {
      case ActionGroup.component:
        await executeComponentGroupAction();
        break;

      case ActionGroup.exit:
        exit = true;
        return;
    }
  }
};

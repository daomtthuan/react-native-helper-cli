import Inquirer from 'inquirer';

import { executeComponentGroupAction } from './component';

enum ActionGroup {
  component = 'Component',
  exit = 'Exit',
}

(async () => {
  console.log('Project commands helper');
  console.log('------------------------------');

  let exit = false;
  while (!exit) {
    const { actionGroup } = await Inquirer.prompt({
      type: 'list',
      name: 'actionGroup',
      message: 'Action group?',
      choices: Object.values(ActionGroup),
      default: ActionGroup.exit,
    });
    console.log('------------------------------');

    switch (actionGroup) {
      case ActionGroup.component:
        await executeComponentGroupAction();
        break;

      case ActionGroup.exit:
        exit = true;
        return;
    }
  }
})();

import Inquirer from 'inquirer';

import { createComponent } from './create';

enum ComponentAction {
  create = 'Create',
  back = 'Back',
}

export const executeComponentGroupAction = async () => {
  const { action } = await Inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Action?',
    choices: Object.values(ComponentAction),
    default: ComponentAction.back,
  });

  switch (action) {
    case ComponentAction.create:
      await createComponent();
      break;

    case ComponentAction.back:
      return;
  }
};

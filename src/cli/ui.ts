import { BREAK_LINE, DESCRIPTION, TITLE } from '../constants/ui';

/**
 * Writes the title of CLI
 */
export const writeTitle = function () {
  TITLE.forEach((line) => console.log(line));
  console.log(BREAK_LINE);
  console.log(DESCRIPTION);
};

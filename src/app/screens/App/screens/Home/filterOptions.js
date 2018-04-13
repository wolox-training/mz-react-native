import { AUTHOR, TITLE, ALL } from './strings';

export const defaultFilterOption = 'everything';
const filterOptions = [
  { value: 'author', text: AUTHOR },
  { value: 'title', text: TITLE },
  { value: defaultFilterOption, text: ALL }
];

export default filterOptions;

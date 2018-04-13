import { AUTHOR, TITLE } from './strings';

export const defaultFilterOption = 'everything';
const filterOptions = [
  { value: 'author', text: AUTHOR },
  { value: 'title', text: TITLE }
];

export default filterOptions;

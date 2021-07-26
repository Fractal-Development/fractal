import { AutoCompleteProps, IDEnabled } from './types';
export declare function AutoComplete<T extends IDEnabled>({ controllableSelectedOptions, onSelect, multiple, ...others }: AutoCompleteProps<T>): JSX.Element;

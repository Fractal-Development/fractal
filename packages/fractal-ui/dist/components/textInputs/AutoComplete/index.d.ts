import { AutoCompleteProps, IDEnabled } from './types';
export declare function AutoComplete<T extends IDEnabled>({ options, getOptionLabel, onSelect, controllableSelectedOptions, multiple, onChangeText, value, ...searchBarProps }: AutoCompleteProps<T>): JSX.Element;

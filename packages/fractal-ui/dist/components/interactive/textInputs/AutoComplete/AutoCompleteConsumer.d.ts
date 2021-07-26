import { AutoCompleteProps, IDEnabled } from './types';
export declare function AutoCompleteConsumer<T extends IDEnabled>({ options, getOptionLabel, multiple, onChangeText, value, ...searchBarProps }: Omit<AutoCompleteProps<T>, 'onSelect' | 'controllableSelectedOptions'>): JSX.Element;

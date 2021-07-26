import { BaseAutoCompleteProps, IDEnabled } from '../types';
export declare function BaseAutoComplete<T extends IDEnabled>({ doneText, filteredData, getLabel, onItemPress, multiple, value, placeholder, onChangeText, onSearch, ...searchBarProps }: BaseAutoCompleteProps<T>): JSX.Element;

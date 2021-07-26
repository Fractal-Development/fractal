import { BaseAutoCompleteProps, IDEnabled } from '../types';
export declare function BaseAutoComplete<T extends IDEnabled>({ suggestionsVisible, hideSuggestions, filteredData, getLabel, onItemPress, multiple, value, onChangeText, onSearch, ...searchBarProps }: BaseAutoCompleteProps<T>): JSX.Element;

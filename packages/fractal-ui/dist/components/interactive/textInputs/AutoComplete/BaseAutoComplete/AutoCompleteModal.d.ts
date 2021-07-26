import { AutoCompleteModalProps, IDEnabled } from '../types';
export declare function AutoCompleteModal<T extends IDEnabled>({ visible, hideModal, doneText, filteredData, getLabel, onItemPress, multiple, value, onChangeText, onSearch, ...searchBarProps }: AutoCompleteModalProps<T>): JSX.Element;

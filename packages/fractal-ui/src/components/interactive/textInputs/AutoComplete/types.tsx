import { SearchBarProps } from '../SearchBar';

export interface IDEnabled {
    id: string;
}

export interface SuggestionsListProps<T> {
    filteredData: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T, isSelected: boolean) => void;
    selectedIds: Array<string>;
    multiple?: boolean;
}

export interface AutoCompleteProps<T> extends SearchBarProps {
    options: Array<T>;
    getOptionLabel: (option: T) => string;
    onSelect: (value: T | Array<T>) => void;
    multiple?: boolean;
    controllableSelectedOptions?: Array<T>;
}

export interface BaseAutoCompleteProps<T> extends Omit<SuggestionsListProps<T>, 'onItemPress'>, SearchBarProps {
    onItemPress: (item: T, isSelected: boolean, keepInput?: boolean) => void;
    suggestionsVisible: boolean;
    hideSuggestions: () => void;
    doneText?: string;
}

export interface AutoCompleteModalProps<T> extends Omit<BaseAutoCompleteProps<T>, 'suggestionsVisible'> {
    visible: boolean;
    hideModal: () => void;
}

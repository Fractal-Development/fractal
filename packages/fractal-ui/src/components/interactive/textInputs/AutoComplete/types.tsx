import { SearchBarProps } from '../SearchBar';

export interface IDEnabled {
    id: string;
}

export interface SuggestionsListProps<T> {
    filteredData: T[];
    getLabel: (item: T) => string;
    onItemPress: (item: T) => void;
    multiple?: boolean;
}

export interface AutoCompleteProps<T> extends SearchBarProps {
    options: T[];
    getOptionLabel: (option: T) => string;
    onSelect: (value: T | T[]) => void;
    multiple?: boolean;
    controllableSelectedOptions?: T[];
}

export interface BaseAutoCompleteProps<T> extends Omit<SuggestionsListProps<T>, 'onItemPress'>, SearchBarProps {
    onItemPress: (item: T, keepInput?: boolean) => void;
    suggestionsVisible: boolean;
    hideSuggestions: () => void;
    doneText?: string;
}

export interface AutoCompleteModalProps<T> extends Omit<BaseAutoCompleteProps<T>, 'suggestionsVisible'> {
    visible: boolean;
    hideModal: () => void;
}

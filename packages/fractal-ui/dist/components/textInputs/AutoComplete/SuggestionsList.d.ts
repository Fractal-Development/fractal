import { IDEnabled, SuggestionsListProps } from './types';
export declare function SuggestionsList<T extends IDEnabled>({ filteredData, getLabel, onItemPress, selectedIds, multiple }: SuggestionsListProps<T>): JSX.Element | null;

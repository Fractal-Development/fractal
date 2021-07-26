import { IDEnabled } from './types';
interface SuggestionItemProps<T> {
    label: string;
    itemData: T;
    isMultiple?: boolean;
    onPress: () => void;
    addSeparator?: boolean;
}
export declare const SUGGESTION_ITEM_HEIGHT = 46;
export declare function SuggestionItem<T extends IDEnabled>({ label, itemData, isMultiple, addSeparator, onPress }: SuggestionItemProps<T>): JSX.Element;
export {};

interface SuggestionItemProps {
    label: string;
    isSelected: boolean;
    isMultiple?: boolean;
    onPress: () => void;
    addSeparator?: boolean;
}
export declare const SUGGESTION_ITEM_HEIGHT = 46;
export declare function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }: SuggestionItemProps): JSX.Element;
export {};

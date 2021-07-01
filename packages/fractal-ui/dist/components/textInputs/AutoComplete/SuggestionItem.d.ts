interface SuggestionItemProps {
    label: string;
    isSelected: boolean;
    isMultiple?: boolean;
    onPress: () => void;
    addSeparator?: boolean;
}
export declare function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }: SuggestionItemProps): JSX.Element;
export {};

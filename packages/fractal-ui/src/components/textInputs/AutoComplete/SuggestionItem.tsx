import React from 'react';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { SimpleRow } from '../../tables/rows/SimpleRow';
import { CheckMarkRow } from '../../tables/rows/CheckMarkRow';

interface SuggestionItemProps {
    label: string;
    isSelected: boolean;
    isMultiple?: boolean;
    onPress: () => void;
    addSeparator?: boolean;
}

export function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }: SuggestionItemProps): JSX.Element {
    return (
        <TouchableOpacity width={'100%'} onPress={onPress}>
            {isMultiple ? (
                <CheckMarkRow title={label} isSelected={isSelected} addSeparator={addSeparator} />
            ) : (
                <SimpleRow title={label} addSeparator={addSeparator} />
            )}
        </TouchableOpacity>
    );
}

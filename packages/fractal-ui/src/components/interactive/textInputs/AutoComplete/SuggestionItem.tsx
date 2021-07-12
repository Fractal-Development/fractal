import React from 'react';
import { TouchableOpacity } from '../../buttons';
import { SimpleRow } from '../../../layout/tables';
import { CheckMarkRow } from '../../../layout/tables/rows/CheckMarkRow';

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
                <CheckMarkRow title={label} isSelected={isSelected} addSeparator={addSeparator} minHeight={46} />
            ) : (
                <SimpleRow title={label} addSeparator={addSeparator} />
            )}
        </TouchableOpacity>
    );
}

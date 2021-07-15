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

export const SUGGESTION_ITEM_HEIGHT = 46;

export function SuggestionItem({ label, isSelected, isMultiple, addSeparator, onPress }: SuggestionItemProps): JSX.Element {
    return (
        <TouchableOpacity width={'100%'} onPress={onPress}>
            {isMultiple ? (
                <CheckMarkRow title={label} isSelected={isSelected} addSeparator={addSeparator} minHeight={SUGGESTION_ITEM_HEIGHT} />
            ) : (
                <SimpleRow title={label} addSeparator={addSeparator} />
            )}
        </TouchableOpacity>
    );
}

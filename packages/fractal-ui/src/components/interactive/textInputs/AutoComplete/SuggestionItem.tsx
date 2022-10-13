import React from 'react';

import { SimpleRow } from '../../../layout/tables';
import { CheckMarkRow } from '../../../layout/tables/rows/CheckMarkRow';
import { TouchableOpacity } from '../../buttons';
import { useSelectedOptions } from './context/hooks/useSelectedOptions';
import { IDEnabled } from './types';

interface SuggestionItemProps<T> {
    label: string;
    itemData: T; // borrar
    isMultiple?: boolean;
    onPress: () => void;
    addSeparator?: boolean;
}

export const SUGGESTION_ITEM_HEIGHT = 46;

export function SuggestionItem<T extends IDEnabled>({
    label,
    itemData,
    isMultiple,
    addSeparator,
    onPress
}: SuggestionItemProps<T>): JSX.Element {
    const [selectedOptions, setSelectedOptions] = useSelectedOptions();
    const isSelected = selectedOptions.find((element: { id: string }) => element.id === itemData.id) !== undefined;

    const addSelectedOption = (option: T) => {
        onPress();
        setSelectedOptions([...selectedOptions, option]);
    };

    const addOption = (option: T) => {
        onPress();
        setSelectedOptions([option]);
    };

    const removeSelectedOption = (option: T) => {
        setSelectedOptions(selectedOptions.filter((item: T) => item.id !== option.id));
    };

    const onOptionPress = () => {
        if (isMultiple) {
            if (!isSelected) {
                addSelectedOption(itemData);
            } else {
                removeSelectedOption(itemData);
            }
        } else {
            addOption(itemData);
        }
    };

    return (
        <TouchableOpacity width='100%' onPress={onOptionPress}>
            {isMultiple ? (
                <CheckMarkRow title={label} isSelected={isSelected} addSeparator={addSeparator} minHeight={SUGGESTION_ITEM_HEIGHT} />
            ) : (
                <SimpleRow title={label} addSeparator={addSeparator} />
            )}
        </TouchableOpacity>
    );
}

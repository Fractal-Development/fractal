import React from 'react';
import { TouchableOpacity } from '../../buttons';
import { SimpleRow } from '../../../layout/tables';
import { CheckMarkRow } from '../../../layout/tables/rows/CheckMarkRow';
import { useSelectedOptions } from './context/hooks/useSelectedOptions';
export const SUGGESTION_ITEM_HEIGHT = 46;
export function SuggestionItem({ label, itemData, isMultiple, addSeparator, onPress }) {
    const [selectedOptions, setSelectedOptions] = useSelectedOptions();
    const isSelected = selectedOptions.find((element) => element.id == itemData.id) != undefined;
    const addSelectedOption = (option) => {
        onPress();
        setSelectedOptions([...selectedOptions, option]);
    };
    const removeSelectedOption = (option) => {
        setSelectedOptions(selectedOptions.filter((item) => item.id != option.id));
    };
    const onOptionPress = () => {
        if (!isSelected) {
            addSelectedOption(itemData);
        }
        else {
            removeSelectedOption(itemData);
        }
    };
    return (React.createElement(TouchableOpacity, { width: '100%', onPress: onOptionPress }, isMultiple ? (React.createElement(CheckMarkRow, { title: label, isSelected: isSelected, addSeparator: addSeparator, minHeight: SUGGESTION_ITEM_HEIGHT })) : (React.createElement(SimpleRow, { title: label, addSeparator: addSeparator }))));
}
//# sourceMappingURL=SuggestionItem.js.map
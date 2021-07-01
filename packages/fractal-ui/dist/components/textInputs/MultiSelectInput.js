import React from 'react';
import { AutoComplete } from './AutoComplete';
import { Button } from '../buttons/Button';
import { Layer } from '../containers';
import { ChipList } from '../ChipList';
export function MultiSelectInput({ options, getOptionLabel, clearButtonText = 'Limpiar', onSelect, onClearPress, onDeletePress, inputValue, controllableSelectedOptions, onChangeText, placeholder, onSubmitEditing }) {
    return (React.createElement(Layer, null,
        React.createElement(AutoComplete, { value: inputValue, multiple: true, options: options, getOptionLabel: getOptionLabel, placeholder: placeholder, onSelect: onSelect, controllableSelectedOptions: controllableSelectedOptions, onChangeText: onChangeText, onSubmitEditing: onSubmitEditing }),
        React.createElement(ChipList, { data: controllableSelectedOptions, getLabel: getOptionLabel, onItemPress: onDeletePress }),
        React.createElement(Button, { variant: 'warning', onPress: onClearPress, text: clearButtonText })));
}
//# sourceMappingURL=MultiSelectInput.js.map
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { AutoComplete } from './AutoComplete';
import { Button } from '../buttons';
import { Layer } from '../../layout';
import { ChipList } from '../../dataDisplay';
export function MultiSelectInput(_a) {
    var { options, getOptionLabel, clearButtonText = 'Limpiar', onSelect, onClearPress, onDeletePress, inputValue, controllableSelectedOptions, onChangeText, placeholder, onSubmitEditing, enableClearButton = false, chipListStyle } = _a, layerProps = __rest(_a, ["options", "getOptionLabel", "clearButtonText", "onSelect", "onClearPress", "onDeletePress", "inputValue", "controllableSelectedOptions", "onChangeText", "placeholder", "onSubmitEditing", "enableClearButton", "chipListStyle"]);
    return (React.createElement(Layer, Object.assign({}, layerProps),
        React.createElement(AutoComplete, { value: inputValue, multiple: true, options: options, getOptionLabel: getOptionLabel, placeholder: placeholder, onSelect: onSelect, controllableSelectedOptions: controllableSelectedOptions, onChangeText: onChangeText, onSubmitEditing: onSubmitEditing }),
        React.createElement(ChipList, Object.assign({ zIndex: -1, data: controllableSelectedOptions, getLabel: getOptionLabel, onItemPress: onDeletePress }, chipListStyle)),
        enableClearButton ? React.createElement(Button, { zIndex: -1, variant: 'warning', onPress: onClearPress, text: clearButtonText }) : null));
}
//# sourceMappingURL=MultiSelectInput.js.map
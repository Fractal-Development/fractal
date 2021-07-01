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
import React, { useState, useCallback } from 'react';
import { Layer } from '../../../containers/Layer';
import { TextFieldButton } from '../../TextFieldButton';
import { AutoCompleteModal } from './AutoCompleteModal';
export function BaseAutoComplete(_a) {
    var { doneText = 'Done', filteredData, getLabel, onItemPress, selectedIds, multiple, value, placeholder, onChangeText, onSearch } = _a, searchBarProps = __rest(_a, ["doneText", "filteredData", "getLabel", "onItemPress", "selectedIds", "multiple", "value", "placeholder", "onChangeText", "onSearch"]);
    const [modalVisible, setModalVisible] = useState(false);
    const hideModal = useCallback(() => setModalVisible(false), []);
    const showModal = useCallback(() => setModalVisible(true), []);
    const handleItemPress = (option, isSelected) => {
        onItemPress(option, isSelected, true);
    };
    return (React.createElement(Layer, null,
        React.createElement(TextFieldButton, { onPress: showModal, value: value, placeholder: placeholder }),
        React.createElement(AutoCompleteModal, Object.assign({ placeholder: placeholder, visible: modalVisible, hideModal: hideModal, doneText: doneText, filteredData: filteredData, getLabel: getLabel, onItemPress: handleItemPress, selectedIds: selectedIds, multiple: multiple, value: value, onChangeText: onChangeText, onSearch: onSearch }, searchBarProps))));
}
//# sourceMappingURL=index.native.js.map
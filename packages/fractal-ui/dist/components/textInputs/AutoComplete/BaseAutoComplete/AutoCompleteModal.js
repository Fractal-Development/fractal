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
import React, { useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../../buttons';
import { PaddingLayer } from '../../../containers';
import { Box } from '../../../containers/Box';
import { MiddleCellModal } from '../../../modals/MiddleCellModal';
import { SearchBar } from '../../SearchBar';
import { SuggestionsList } from '../SuggestionsList';
export function AutoCompleteModal(_a) {
    var { visible, hideModal, doneText = 'Done', filteredData, getLabel, onItemPress, selectedIds, multiple, value, onChangeText, onSearch } = _a, searchBarProps = __rest(_a, ["visible", "hideModal", "doneText", "filteredData", "getLabel", "onItemPress", "selectedIds", "multiple", "value", "onChangeText", "onSearch"]);
    const searchInputRef = useRef();
    useEffect(() => {
        if (searchInputRef.current && visible) {
            searchInputRef.current.focus();
        }
    }, [visible]);
    return (React.createElement(MiddleCellModal, { visible: visible, onDismiss: hideModal },
        React.createElement(Box, { flex: 1, padding: 0 },
            React.createElement(PaddingLayer, null,
                React.createElement(SearchBar, Object.assign({ inputRef: searchInputRef, value: value, onSearch: onSearch, onChangeText: onChangeText }, searchBarProps))),
            React.createElement(ScrollView, null,
                React.createElement(SuggestionsList, { multiple: multiple, filteredData: filteredData, getLabel: getLabel, onItemPress: onItemPress, selectedIds: selectedIds })),
            React.createElement(PaddingLayer, null,
                React.createElement(Button, { variant: 'main', text: doneText, onPress: hideModal })))));
}
//# sourceMappingURL=AutoCompleteModal.js.map
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
import React, { useEffect } from 'react';
import { useTheme } from '../../../../context';
import { Box } from '../../../containers/Box';
import { Popover } from '../../../Popover';
import { SearchBar } from '../../SearchBar';
import { SuggestionsList } from '../SuggestionsList';
export function BaseAutoComplete(_a) {
    var { suggestionsVisible, hideSuggestions, filteredData, getLabel, onItemPress, selectedIds, multiple, value, onChangeText, onSearch } = _a, searchBarProps = __rest(_a, ["suggestionsVisible", "hideSuggestions", "filteredData", "getLabel", "onItemPress", "selectedIds", "multiple", "value", "onChangeText", "onSearch"]);
    const { spacings } = useTheme();
    useEffect(() => {
        if (filteredData.length == 0) {
            hideSuggestions();
        }
    }, [filteredData.length, hideSuggestions]);
    return (React.createElement(Popover, { placement: 'bottom', active: suggestionsVisible, onRequestClose: hideSuggestions, popoverChildren: (anchorWidth) => (React.createElement(Box, { width: anchorWidth, marginTop: spacings.s, padding: 0, paddingTop: spacings.xs, paddingBottom: spacings.xs, maxHeight: 240, overflow: 'scroll' },
            React.createElement(SuggestionsList, { multiple: multiple, filteredData: filteredData, getLabel: getLabel, onItemPress: onItemPress, selectedIds: selectedIds }))) }, (ref) => (React.createElement(SearchBar, Object.assign({ ref: ref, value: value, ariaLabel: 'Autocomplete', onSearch: onSearch, onChangeText: onChangeText }, searchBarProps)))));
}
//# sourceMappingURL=index.js.map
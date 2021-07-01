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
import React, { useState } from 'react';
import { useControllableState } from '../../../hooks/useControllableState';
import { BaseAutoComplete } from './BaseAutoComplete';
export function AutoComplete(_a) {
    var { options, getOptionLabel, onSelect, controllableSelectedOptions, multiple, onChangeText, value } = _a, searchBarProps = __rest(_a, ["options", "getOptionLabel", "onSelect", "controllableSelectedOptions", "multiple", "onChangeText", "value"]);
    const [suggestionsVisible, setSuggestionsVisible] = useState(false);
    const [userInput, setUserInput] = useControllableState(value, '', onChangeText);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const handleSelect = (selectedOptions) => {
        if (multiple) {
            onSelect(selectedOptions);
        }
        else {
            onSelect(selectedOptions[0]);
        }
    };
    const [selectedOptions, setSelectedOptions] = useControllableState(controllableSelectedOptions, [], handleSelect);
    const selectedOptionsIds = selectedOptions.map((selectedOption) => selectedOption.id);
    const addSelectedOption = (option) => {
        if (multiple) {
            setSelectedOptions([...selectedOptions, option]);
        }
        else {
            setSelectedOptions([option]);
        }
    };
    const removeSelectedOption = (option) => {
        setSelectedOptions(selectedOptions.filter((item) => item.id != option.id));
    };
    const onOptionPress = (option, isSelected, keepInput) => {
        if (!keepInput && multiple) {
            setUserInput('');
        }
        if (!multiple) {
            setUserInput(getOptionLabel(option));
        }
        setSuggestionsVisible(false);
        if (!isSelected) {
            addSelectedOption(option);
        }
        else {
            removeSelectedOption(option);
        }
    };
    const hideSuggestions = () => setSuggestionsVisible(false);
    const handleChangeText = (query) => {
        const newFilteredOptions = options.filter((option) => {
            const candidate = getOptionLabel(option);
            const clearUserInput = query.trim();
            return candidate.toLowerCase().indexOf(clearUserInput.toLowerCase()) > -1;
        });
        setSuggestionsVisible(true);
        setFilteredOptions(newFilteredOptions);
        setUserInput(query);
    };
    return (React.createElement(BaseAutoComplete, Object.assign({ value: userInput, onChangeText: handleChangeText, suggestionsVisible: suggestionsVisible, hideSuggestions: hideSuggestions, filteredData: filteredOptions, getLabel: getOptionLabel, onItemPress: onOptionPress, selectedIds: selectedOptionsIds, multiple: multiple }, searchBarProps)));
}
//# sourceMappingURL=index.js.map
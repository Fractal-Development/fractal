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
import React, { forwardRef, useCallback } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useControllableState } from '../../hooks/useControllableState';
import { ButtonTextField } from './ButtonTextField';
const SearchBar = forwardRef((_a, ref) => {
    var { value, onChangeText, onSearch, enableSearchButton = false, buttonText, buttonVariant = 'main', placeholder, ariaLabel = 'Search' } = _a, others = __rest(_a, ["value", "onChangeText", "onSearch", "enableSearchButton", "buttonText", "buttonVariant", "placeholder", "ariaLabel"]);
    const [query, setQuery] = useControllableState(value, '', onChangeText);
    const handleChangeText = (text) => {
        if (!enableSearchButton) {
            onSearch === null || onSearch === void 0 ? void 0 : onSearch(text);
        }
        setQuery(text);
    };
    const renderIcon = useCallback((color, size) => React.createElement(SearchIcon, { height: size, width: size, fill: color }), []);
    const handleSearch = () => {
        onSearch === null || onSearch === void 0 ? void 0 : onSearch(query);
    };
    return (React.createElement(ButtonTextField, Object.assign({ ref: ref, value: value, placeholder: placeholder, leftImage: enableSearchButton ? undefined : renderIcon, onChangeText: handleChangeText, textFieldProps: { onSubmitEditing: enableSearchButton ? handleSearch : undefined }, showButton: enableSearchButton, buttonText: buttonText, buttonVariant: buttonVariant, onButtonPress: handleSearch, buttonAriaLabel: ariaLabel, buttonImage: renderIcon }, others)));
});
SearchBar.displayName = 'SearchBar';
export { SearchBar };
//# sourceMappingURL=SearchBar.js.map
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
import { AutoCompleteConsumer } from './AutoCompleteConsumer';
import { SelectedOptionsProvider } from './context/SelectedOptionsContext';
export function AutoComplete(_a) {
    var { controllableSelectedOptions, onSelect, multiple } = _a, others = __rest(_a, ["controllableSelectedOptions", "onSelect", "multiple"]);
    return (React.createElement(SelectedOptionsProvider, { controllableSelectedOptions: controllableSelectedOptions, onSelect: onSelect, multiple: multiple },
        React.createElement(AutoCompleteConsumer, Object.assign({ multiple: multiple }, others))));
}
//# sourceMappingURL=index.js.map
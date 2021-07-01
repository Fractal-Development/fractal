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
import React, { forwardRef } from 'react';
import { useControllableState } from '../../hooks/useControllableState';
import { BaseSegmentedControl } from './BaseSegmentedControl';
const SegmentedControl = forwardRef((_a, ref) => {
    var { onChange, onValueChange, selectedIndex: selectedIndexProp, defaultSelectedIndex, values } = _a, others = __rest(_a, ["onChange", "onValueChange", "selectedIndex", "defaultSelectedIndex", "values"]);
    const onIndexChange = (index) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(values[index], index);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(values[index]);
    };
    const [selectedIndex, setSelectedIndex] = useControllableState(selectedIndexProp, defaultSelectedIndex !== null && defaultSelectedIndex !== void 0 ? defaultSelectedIndex : 0, onIndexChange);
    const handleIndexChange = (index) => setSelectedIndex(index);
    return React.createElement(BaseSegmentedControl, Object.assign({ ref: ref, values: values, selectedIndex: selectedIndex, onTabPress: handleIndexChange }, others));
});
SegmentedControl.displayName = 'SegmentedControl';
export { SegmentedControl };
//# sourceMappingURL=index.js.map
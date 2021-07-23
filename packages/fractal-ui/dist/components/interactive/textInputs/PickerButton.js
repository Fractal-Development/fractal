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
import { useTheme } from '../../../context';
import { ChevronDownIcon } from '../../../assets';
import { TextFieldButton } from './TextFieldButton';
const PickerButton = forwardRef((_a, ref) => {
    var { rightImage } = _a, others = __rest(_a, ["rightImage"]);
    const { colors } = useTheme();
    return (React.createElement(TextFieldButton, Object.assign({ ref: ref, rightImage: rightImage ? rightImage(colors.placeholder, 21) : React.createElement(ChevronDownIcon, { width: 21, fill: colors.placeholder }) }, others)));
});
PickerButton.displayName = 'PickerButton';
export { PickerButton };
//# sourceMappingURL=PickerButton.js.map
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
import { ThreeDotsIcon } from '../../assets/ThreeDotsIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
const OptionsButton = forwardRef((_a, ref) => {
    var { size = 24 } = _a, others = __rest(_a, ["size"]);
    const { colors } = useTheme();
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: size, width: size, justifyContent: 'center', alignItems: 'center', "aria-label": 'Options' }, others),
        React.createElement(ThreeDotsIcon, { height: size, width: size, fill: colors.text })));
});
OptionsButton.displayName = 'CrossButton';
export { OptionsButton };
//# sourceMappingURL=OptionsButton.js.map
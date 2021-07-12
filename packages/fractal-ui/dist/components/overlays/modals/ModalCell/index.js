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
import { useValueForLargeSizeType } from '@bma98/size-class';
import { BottomCellDesktop, BottomCellPhone } from './Bottom';
import { MiddleCellDesktop, MiddleCellPhone } from './Middle';
export function ModalCell(_a) {
    var { variant } = _a, others = __rest(_a, ["variant"]);
    const DesktopComponent = variant === 'bottom' ? BottomCellDesktop : MiddleCellDesktop;
    const CellPhoneComponent = variant === 'bottom' ? BottomCellPhone : MiddleCellPhone;
    const Wrapper = useValueForLargeSizeType('width', DesktopComponent, CellPhoneComponent);
    return React.createElement(Wrapper, Object.assign({}, others));
}
//# sourceMappingURL=index.js.map
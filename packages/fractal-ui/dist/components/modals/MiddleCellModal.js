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
import { DimmedModal } from './DimmedModal';
import { ModalCell } from './ModalCell';
const MiddleCellModal = forwardRef((_a, ref) => {
    var { visible, onDismiss } = _a, others = __rest(_a, ["visible", "onDismiss"]);
    return (React.createElement(DimmedModal, { ref: ref, pointerEvents: 'box-none', visible: visible, onDismiss: onDismiss, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
        React.createElement(ModalCell, Object.assign({}, others, { variant: 'middle' }))));
});
MiddleCellModal.displayName = 'MiddleCellModal';
export { MiddleCellModal };
//# sourceMappingURL=MiddleCellModal.js.map
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
import { AnimatePresence } from 'framer-motion';
import React, { forwardRef } from 'react';
import { ModalPortal } from './ModalPortal';
import { ModalContent } from './ModalContent';
const Modal = forwardRef((_a, ref) => {
    var { visible } = _a, others = __rest(_a, ["visible"]);
    delete others['onDismiss'];
    return (React.createElement(ModalPortal, null,
        React.createElement(AnimatePresence, null, visible ? React.createElement(ModalContent, Object.assign({ ref: ref, key: 'ModalContent' }, others)) : null)));
});
Modal.displayName = 'Modal';
export { Modal };
//# sourceMappingURL=index.js.map
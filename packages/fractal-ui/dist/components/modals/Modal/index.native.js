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
import { Modal as RNModal } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../containers';
const Modal = forwardRef((_a, ref) => {
    var { visible } = _a, others = __rest(_a, ["visible"]);
    return (React.createElement(AnimatePresence, null, visible ? (React.createElement(RNModal, { ref: ref, animationType: 'none', transparent: true },
        React.createElement(Layer, Object.assign({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, others)))) : null));
});
Modal.displayName = 'Modal';
export { Modal };
//# sourceMappingURL=index.native.js.map
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
import React, { useEffect, forwardRef } from 'react';
import { Layer } from '../../containers';
const ModalContent = forwardRef((_a, ref) => {
    var { children } = _a, others = __rest(_a, ["children"]);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);
    return (React.createElement(Layer, Object.assign({ ref: ref, position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 2 }, others), children));
});
ModalContent.displayName = 'ModalContent';
export { ModalContent };
//# sourceMappingURL=ModalContent.js.map
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
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../layout/Layer';
import { ModalPortal } from '../modals/Modal/ModalPortal';
import { OutsideClickListener } from './OutsideClickListener';
import { styleVariants } from './utils/styleVariants';
const PopoverPortalContent = forwardRef((_a, ref) => {
    var { active, anchorRef, popoverRef, anchorWidth, placementOffsetStyle, popoverChildren, popoverContainerProps, onRequestClose, children } = _a, others = __rest(_a, ["active", "anchorRef", "popoverRef", "anchorWidth", "placementOffsetStyle", "popoverChildren", "popoverContainerProps", "onRequestClose", "children"]);
    return (React.createElement(Layer, Object.assign({ ref: ref }, others),
        children(anchorRef),
        React.createElement(ModalPortal, null,
            React.createElement(AnimatePresence, null, active ? (React.createElement(Layer, Object.assign({ ref: popoverRef, from: styleVariants.initial, animate: styleVariants.visible, exit: styleVariants.initial, position: 'absolute', zIndex: 2, style: placementOffsetStyle }, popoverContainerProps),
                React.createElement(OutsideClickListener, { onOutsideClick: onRequestClose }, popoverChildren(anchorWidth)))) : null))));
});
PopoverPortalContent.displayName = 'PopoverPortalContent';
export { PopoverPortalContent };
//# sourceMappingURL=PopoverPortalContent.js.map
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
import { OutsideClickListener } from './OutsideClickListener';
import { styleVariants } from './utils/styleVariants';
const PopoverContent = forwardRef((_a, ref) => {
    var { active, anchorRef, popoverRef, anchorWidth, placementOffsetStyle, popoverChildren, popoverContainerProps, onRequestClose, children } = _a, others = __rest(_a, ["active", "anchorRef", "popoverRef", "anchorWidth", "placementOffsetStyle", "popoverChildren", "popoverContainerProps", "onRequestClose", "children"]);
    return (React.createElement(OutsideClickListener, { onOutsideClick: onRequestClose },
        React.createElement(Layer, Object.assign({ ref: ref, position: "relative", display: "inline-block" }, others),
            children(anchorRef),
            React.createElement(AnimatePresence, null, active ? (React.createElement(Layer, Object.assign({ ref: popoverRef, from: styleVariants.initial, animate: styleVariants.visible, exit: styleVariants.initial, position: "absolute", zIndex: 2000, style: placementOffsetStyle }, popoverContainerProps), popoverChildren(anchorWidth))) : null))));
});
PopoverContent.displayName = 'PopoverContent';
export { PopoverContent };
//# sourceMappingURL=PopoverContent.js.map
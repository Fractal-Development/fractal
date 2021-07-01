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
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../containers/Layer';
import { styleVariants } from './utils/styleVariants';
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { OutsideClickListener } from './OutsideClickListener';
const Popover = forwardRef((_a, ref) => {
    var _b;
    var { active, placement = 'bottom', popoverChildren, popoverContainerProps, onRequestClose, children } = _a, others = __rest(_a, ["active", "placement", "popoverChildren", "popoverContainerProps", "onRequestClose", "children"]);
    const [placementOffsetStyle, setPlacementOffsetStyle] = useState();
    const anchorRef = useRef();
    const popoverRef = useRef();
    const anchorWidth = (_b = anchorRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth;
    useEffect(() => {
        setPlacementOffsetStyle(getWebPlacementOffsetStyle(anchorRef, popoverRef, placement));
    }, [placement, active]);
    return (React.createElement(Layer, Object.assign({ ref: ref, position: 'relative', display: 'inline-block' }, others),
        children(anchorRef),
        React.createElement(AnimatePresence, null, active ? (React.createElement(OutsideClickListener, { onOutsideClick: onRequestClose },
            React.createElement(Layer, Object.assign({ ref: popoverRef, initial: styleVariants.initial, animate: styleVariants.visible, exit: styleVariants.initial, position: 'absolute', zIndex: 2000, style: placementOffsetStyle }, popoverContainerProps), popoverChildren(anchorWidth)))) : null)));
});
Popover.displayName = 'Popover';
export { Popover };
//# sourceMappingURL=index.js.map
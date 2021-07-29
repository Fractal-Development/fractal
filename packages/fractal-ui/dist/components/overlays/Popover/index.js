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
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { getWebPortalPlacementOffsetStyle } from './utils/getWebPortalPlacementOffsetStyle';
import { PopoverPortalContent } from './PopoverPortalContent';
import { PopoverContent } from './PopoverContent';
const Popover = forwardRef((_a, ref) => {
    var _b;
    var { active, placement = 'bottom', usePortal, popoverChildren, popoverContainerProps, onRequestClose, children } = _a, others = __rest(_a, ["active", "placement", "usePortal", "popoverChildren", "popoverContainerProps", "onRequestClose", "children"]);
    const [placementOffsetStyle, setPlacementOffsetStyle] = useState();
    const anchorRef = useRef();
    const popoverRef = useRef();
    const anchorWidth = (_b = anchorRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth;
    useEffect(() => {
        setPlacementOffsetStyle(usePortal
            ? getWebPortalPlacementOffsetStyle(anchorRef, popoverRef, placement)
            : getWebPlacementOffsetStyle(anchorRef, popoverRef, placement));
    }, [placement, active, usePortal]);
    if (usePortal) {
        return (React.createElement(PopoverPortalContent, Object.assign({ ref: ref, active: active, anchorRef: anchorRef, popoverRef: popoverRef, anchorWidth: anchorWidth, placementOffsetStyle: placementOffsetStyle, popoverChildren: popoverChildren, popoverContainerProps: popoverContainerProps, onRequestClose: onRequestClose }, others), children));
    }
    return (React.createElement(PopoverContent, Object.assign({ ref: ref, active: active, anchorRef: anchorRef, popoverRef: popoverRef, anchorWidth: anchorWidth, placementOffsetStyle: placementOffsetStyle, popoverChildren: popoverChildren, popoverContainerProps: popoverContainerProps, onRequestClose: onRequestClose }, others), children));
});
Popover.displayName = 'Popover';
export { Popover };
//# sourceMappingURL=index.js.map
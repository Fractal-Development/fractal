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
import React, { useCallback, useEffect, useMemo, useState, forwardRef, useRef } from 'react';
import { Pressable } from '../buttons/Pressable';
import { Layer } from '../containers/Layer';
import { Modal } from '../modals/Modal';
import { styleVariants } from './utils/styleVariants';
import { getNativePlacementOffsetStyle } from './utils/getNativePlacementOffsetStyle';
const Popover = forwardRef((_a, ref) => {
    var { active, placement = 'bottom', popoverChildren, popoverContainerProps, onRequestClose, children, modalBackgroundColor } = _a, others = __rest(_a, ["active", "placement", "popoverChildren", "popoverContainerProps", "onRequestClose", "children", "modalBackgroundColor"]);
    const [anchorViewLayout, setAnchorViewLayout] = useState({ x: 0, y: 0, height: 0, width: 0 });
    const [popoverViewLayout, setPopoverViewLayout] = useState({ x: 0, y: 0, height: 0, width: 0 });
    const anchorRef = useRef();
    const styles = useMemo(() => {
        return getNativePlacementOffsetStyle(anchorViewLayout, popoverViewLayout, placement);
    }, [anchorViewLayout, placement, popoverViewLayout]);
    const onPopoverLayout = useCallback(({ nativeEvent: { layout } }) => {
        setPopoverViewLayout(layout);
    }, []);
    const measureInWindow = useCallback(() => {
        var _a;
        (_a = anchorRef.current) === null || _a === void 0 ? void 0 : _a.measureInWindow((x, y, width, height) => {
            setAnchorViewLayout({ x, y, width, height });
        });
    }, []);
    useEffect(() => {
        if (active) {
            measureInWindow();
        }
    }, [active, measureInWindow]);
    return (React.createElement(Layer, Object.assign({ ref: ref }, others),
        children(anchorRef),
        React.createElement(Modal, { visible: active },
            React.createElement(Pressable, { zIndex: 0, onPress: onRequestClose, position: 'absolute', width: '100%', height: '100%', backgroundColor: modalBackgroundColor }),
            React.createElement(Layer, Object.assign({ onLayout: onPopoverLayout, initial: styleVariants.initial, animate: styleVariants.visible, exit: styleVariants.initial, position: 'absolute', zIndex: 2, style: styles }, popoverContainerProps), popoverChildren(anchorViewLayout.width)))));
});
Popover.displayName = 'Popover';
export { Popover };
//# sourceMappingURL=index.native.js.map
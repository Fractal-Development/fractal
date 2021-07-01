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
import { Modal } from './Modal';
import { Pressable } from '../buttons';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
import { canUseDOM } from '../../executionEnvironment/canUseDOM';
const modalAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};
const pressableAnimationStyles = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 }
};
const transition = canUseDOM ? { type: 'spring' } : { type: 'ease', duration: 400 };
const DimmedModal = forwardRef((_a, ref) => {
    var { visible, onDismiss } = _a, others = __rest(_a, ["visible", "onDismiss"]);
    return (React.createElement(Modal, { ref: ref, visible: visible, onDismiss: onDismiss, initial: modalAnimationStyles.initial, animate: modalAnimationStyles.animate, exit: modalAnimationStyles.initial },
        React.createElement(Pressable, { zIndex: 999, onPress: onDismiss, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', initial: pressableAnimationStyles.initial, animate: pressableAnimationStyles.animate, exit: pressableAnimationStyles.initial, transition: transition }),
        React.createElement(SafeAreaLayer, Object.assign({ zIndex: 1000 }, others))));
});
DimmedModal.displayName = 'DimmedModal';
export { DimmedModal };
//# sourceMappingURL=DimmedModal.js.map
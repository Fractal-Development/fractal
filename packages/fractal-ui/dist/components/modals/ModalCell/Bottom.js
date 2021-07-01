import React from 'react';
import { useTheme } from '../../../core';
import { ModalCellSharedStyles } from './ModalCellSharedStyles';
const bottomCellAnimationStyles = {
    initial: { scale: 0 },
    animate: { scale: 1 }
};
function BottomCellSharedStyles(props) {
    const { spacings } = useTheme();
    return (React.createElement(ModalCellSharedStyles, Object.assign({ initial: bottomCellAnimationStyles.initial, animate: bottomCellAnimationStyles.animate, exit: bottomCellAnimationStyles.initial, margin: spacings.m }, props)));
}
export function BottomCellDesktop(props) {
    return React.createElement(BottomCellSharedStyles, Object.assign({ maxWidth: 550, maxHeight: '50%', width: '60%', minHeight: 300 }, props));
}
export function BottomCellPhone(props) {
    return React.createElement(BottomCellSharedStyles, Object.assign({ alignSelf: 'stretch', minHeight: 300, maxHeight: '50%' }, props));
}
//# sourceMappingURL=Bottom.js.map
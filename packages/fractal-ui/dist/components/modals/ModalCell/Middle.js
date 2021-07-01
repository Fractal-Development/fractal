import React from 'react';
import { ModalCellSharedStyles } from './ModalCellSharedStyles';
import { useTheme } from '../../../core';
const middleCellAnimationStyles = {
    initial: { scale: 0 },
    animate: { scale: 1 }
};
function MiddleCellSharedStyles(props) {
    return (React.createElement(ModalCellSharedStyles, Object.assign({ initial: middleCellAnimationStyles.initial, animate: middleCellAnimationStyles.animate, exit: middleCellAnimationStyles.initial }, props)));
}
export function MiddleCellDesktop(props) {
    return React.createElement(MiddleCellSharedStyles, Object.assign({ maxWidth: 550, maxHeight: 550, width: '60%', height: '60%' }, props));
}
export function MiddleCellPhone(props) {
    const { spacings } = useTheme();
    return React.createElement(MiddleCellSharedStyles, Object.assign({ alignSelf: 'stretch', flex: 1, margin: spacings.m }, props));
}
//# sourceMappingURL=Middle.js.map
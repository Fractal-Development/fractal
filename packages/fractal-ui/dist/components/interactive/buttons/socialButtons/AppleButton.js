import React, { forwardRef } from 'react';
import { AppleIcon } from '../../../../assets';
import { Button } from '../Button';
import { getAppleButtonAccessibilityProps } from './accessibility/getAppleButtonAccessibilityProps';
const AppleButton = forwardRef((props, ref) => {
    const { text } = props;
    return (React.createElement(Button, Object.assign({ ref: ref, addShadow: true, backgroundColor: '#000000', pressedBackgroundColor: "#111111" }, getAppleButtonAccessibilityProps(), props),
        React.createElement(AppleIcon, { height: text != null ? 18 : 24, fill: 'white' })));
});
AppleButton.displayName = 'AppleButton';
export { AppleButton };
//# sourceMappingURL=AppleButton.js.map
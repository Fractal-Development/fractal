import React, { forwardRef } from 'react';
import { FacebookIcon } from '../../../../assets';
import { Button } from '../Button';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';
const FacebookButton = forwardRef((props, ref) => (React.createElement(Button, Object.assign({ ref: ref, backgroundColor: '#3975EA', pressedBackgroundColor: "#295AC9" }, getFacebookButtonAccessibilityProps(), { addShadow: true }, props),
    React.createElement(FacebookIcon, { height: 24, fill: 'white' }))));
FacebookButton.displayName = 'FacebookButton';
export { FacebookButton };
//# sourceMappingURL=FacebookButton.js.map
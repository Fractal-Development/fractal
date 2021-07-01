import React, { forwardRef } from 'react';
import { FacebookIcon } from '../../assets/FacebookIcon';
import { Button } from '../buttons/Button';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';
const FacebookButton = forwardRef((props, ref) => {
    return (React.createElement(Button, Object.assign({ ref: ref, backgroundColor: '#3975EA', pressedBackgroundColor: '#295AC9' }, getFacebookButtonAccessibilityProps(), { addShadow: true }, props),
        React.createElement(FacebookIcon, { height: 24, fill: 'white' })));
});
FacebookButton.displayName = 'FacebookButton';
export { FacebookButton };
//# sourceMappingURL=FacebookButton.js.map
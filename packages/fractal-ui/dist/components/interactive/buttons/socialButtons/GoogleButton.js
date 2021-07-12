import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../../../assets';
import { Button } from '../Button';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';
const GoogleButton = forwardRef((props, ref) => {
    return (React.createElement(Button, Object.assign({ reduceColor: true, addShadow: true, ref: ref, variant: 'content' }, getGoogleButtonAccessibilityProps(), props),
        React.createElement(GoogleIcon, { height: 24 })));
});
GoogleButton.displayName = 'GoogleButton';
export { GoogleButton };
//# sourceMappingURL=GoogleButton.js.map
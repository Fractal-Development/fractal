import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../../../assets';
import { useTheme } from '../../../../context';
import { Button } from '../Button';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';
const GoogleButton = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return (React.createElement(Button, Object.assign({ reduceColor: true, addShadow: true, ref: ref, variant: 'content' }, getGoogleButtonAccessibilityProps(), { activityIndicatorColor: colors.black }, props),
        React.createElement(GoogleIcon, { height: 24 })));
});
GoogleButton.displayName = 'GoogleButton';
export { GoogleButton };
//# sourceMappingURL=GoogleButton.js.map
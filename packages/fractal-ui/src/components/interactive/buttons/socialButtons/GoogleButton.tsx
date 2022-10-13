import React, { forwardRef } from 'react';

import { GoogleIcon } from '../../../../assets';
import { useTheme } from '../../../../context';
import { Button, ButtonProps } from '../Button';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';

export type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

const GoogleButton = forwardRef((props: GoogleButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return (
        <Button
            reduceColor
            addShadow
            ref={ref}
            variant='content'
            {...getGoogleButtonAccessibilityProps()}
            activityIndicatorColor={colors.black}
            {...props}
        >
            <GoogleIcon height={24} />
        </Button>
    );
});

GoogleButton.displayName = 'GoogleButton';

export { GoogleButton };

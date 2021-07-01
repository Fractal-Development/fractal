import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { Button, ButtonProps } from '../buttons/Button';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';

export type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

const GoogleButton = forwardRef((props: GoogleButtonProps, ref: any): JSX.Element => {
    return (
        <Button reduceColor addShadow ref={ref} variant={'content'} {...getGoogleButtonAccessibilityProps()} {...props}>
            <GoogleIcon height={24} />
        </Button>
    );
});

GoogleButton.displayName = 'GoogleButton';

export { GoogleButton };

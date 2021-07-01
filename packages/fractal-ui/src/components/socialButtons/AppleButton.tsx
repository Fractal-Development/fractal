import React, { forwardRef } from 'react';
import { AppleIcon } from '../../assets/AppleIcon';
import { Button, ButtonProps } from '../buttons/Button';
import { getAppleButtonAccessibilityProps } from './accessibility/getAppleButtonAccessibilityProps';

export type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

const AppleButton = forwardRef((props: AppleButtonProps, ref: any): JSX.Element => {
    const { text } = props;

    return (
        <Button
            ref={ref}
            addShadow
            backgroundColor='black'
            pressedBackgroundColor={'#111111'}
            {...getAppleButtonAccessibilityProps()}
            {...props}
        >
            <AppleIcon height={text != null ? 18 : 24} fill='white' />
        </Button>
    );
});

AppleButton.displayName = 'AppleButton';

export { AppleButton };

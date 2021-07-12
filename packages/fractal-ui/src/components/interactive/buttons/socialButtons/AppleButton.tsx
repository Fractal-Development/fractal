import React, { forwardRef } from 'react';
import { AppleIcon } from '../../../../assets';
import { Button, ButtonProps } from '../Button';
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
            backgroundColor='#000000'
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

import React, { forwardRef } from 'react';

import { FacebookIcon } from '../../../../assets';
import { Button, ButtonProps } from '../Button';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';

export type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

const FacebookButton = forwardRef(
    (props: FacebookButtonProps, ref: any): JSX.Element => (
        <Button
            ref={ref}
            backgroundColor='#3975EA'
            pressedBackgroundColor='#295AC9'
            {...getFacebookButtonAccessibilityProps()}
            addShadow
            {...props}
        >
            <FacebookIcon height={24} fill='white' />
        </Button>
    )
);

FacebookButton.displayName = 'FacebookButton';

export { FacebookButton };

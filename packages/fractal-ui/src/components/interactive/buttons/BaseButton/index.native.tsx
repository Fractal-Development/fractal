import React, { forwardRef } from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

const BaseButton = forwardRef(({ whileTap, pressedBackgroundColor, ...others }: BaseButtonProps, ref: any): JSX.Element => {
    const tapStyles = {
        scale: 0.9,
        backgroundColor: pressedBackgroundColor,
        ...whileTap
    };

    return <Pressable ref={ref} whileTap={tapStyles} {...others} />;
});

BaseButton.displayName = 'BaseButton';

export { BaseButton };

import React, { forwardRef } from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

const BaseButton = forwardRef(
    ({ pressedBackgroundColor, backgroundColor, whileHover, whileTap, ...others }: BaseButtonProps, ref: any): JSX.Element => {
        const hoverStyles = {
            backgroundColor: pressedBackgroundColor,
            ...whileHover
        };

        const tapStyles = {
            scale: 0.9,
            backgroundColor: pressedBackgroundColor,
            ...whileTap
        };

        return (
            <Pressable
                ref={ref}
                animate={{ backgroundColor: backgroundColor }}
                backgroundColor={backgroundColor}
                whileHover={hoverStyles}
                whileTap={tapStyles}
                {...others}
            />
        );
    }
);

BaseButton.displayName = 'BaseButton';

export { BaseButton };

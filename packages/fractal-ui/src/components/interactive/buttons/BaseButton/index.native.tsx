import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import { Pressable } from '../Pressable';
import { BaseButtonProps } from './types';

const BaseButton = forwardRef(
    ({ whileTap, pressedBackgroundColor, onPressIn, onPressOut, backgroundColor, ...others }: BaseButtonProps, ref: any): JSX.Element => {
        const [currentVariant, setCurrentVariant] = useState('from');
        const variants = useMemo(
            () => ({
                tapped: {
                    scale: 0.9,
                    opacity: 0.8,
                    backgroundColor: pressedBackgroundColor,
                    ...whileTap
                },
                from: {
                    scale: 1.0,
                    opacity: 1.0,
                    backgroundColor
                }
            }),
            [pressedBackgroundColor, backgroundColor, whileTap]
        );

        const togglePress = useCallback(() => {
            setCurrentVariant((variant) => (variant === 'tapped' ? 'from' : 'tapped'));
        }, []);

        const handlePressIn = useCallback(() => {
            togglePress();
            onPressIn?.();
        }, [togglePress, onPressIn]);

        const handlePressOut = useCallback(() => {
            togglePress();
            onPressOut?.();
        }, [togglePress, onPressOut]);

        return (
            <Pressable
                ref={ref}
                variants={variants}
                currentVariant={currentVariant}
                backgroundColor={backgroundColor}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                {...others}
            />
        );
    }
);

BaseButton.displayName = 'BaseButton';

export { BaseButton };

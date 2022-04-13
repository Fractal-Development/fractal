import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

const BaseButton = forwardRef(
    ({ whileTap, pressedBackgroundColor, onPressIn, onPressOut, backgroundColor, ...others }: BaseButtonProps, ref: any): JSX.Element => {
        const [currentVariant, setCurrentVariant] = useState('default');
        const variants = useMemo(
            () => ({
                tapped: {
                    scale: 0.9,
                    backgroundColor: pressedBackgroundColor,
                    ...whileTap
                },
                default: {
                    scale: 1.0,
                    backgroundColor
                }
            }),
            [pressedBackgroundColor, backgroundColor, whileTap]
        );

        const togglePress = useCallback(() => {
            setCurrentVariant((variant) => (variant === 'tapped' ? 'default' : 'tapped'));
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

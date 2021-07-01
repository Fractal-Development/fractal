import React, { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';
import { useTheme } from '../../context/hooks/useTheme';
import { getCircularIconButtonAccessibilityProps } from './accessibility/getCircularIconButtonAccessibilityProps';
import { useCircularButtonColors } from './hooks/useCircularIconButtonColors';

const CircularIconButton = forwardRef(({ variant = 'main', children, reduceColor, ...others }: ButtonProps, ref: any): JSX.Element => {
    const { sizes } = useTheme();
    const [backgroundColor, foregroundColor, pressedBackgroundColor] = useCircularButtonColors(variant, reduceColor);

    return (
        <Button
            ref={ref}
            variant={variant}
            backgroundColor={backgroundColor}
            pressedBackgroundColor={pressedBackgroundColor}
            height={sizes.interactiveItemHeight}
            width={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            {...getCircularIconButtonAccessibilityProps()}
            {...others}
        >
            {typeof children === 'function' ? children?.(foregroundColor) : children}
        </Button>
    );
});

CircularIconButton.displayName = 'CircularIconButton';

export { CircularIconButton };

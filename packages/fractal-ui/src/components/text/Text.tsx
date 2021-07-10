import React, { forwardRef } from 'react';
import { useTheme } from '../../context';
import { BaseText } from './BaseText';
import { TextProps } from './BaseText/types';

const Text = forwardRef(({ variant = 'normal', ...others }: TextProps, ref: any): JSX.Element => {
    const { textVariants, colors } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants[variant];
    const finalColor = colors[color];

    return (
        <BaseText
            ref={ref}
            selectable={false}
            focusable={false}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={finalColor}
            {...others}
        />
    );
});

Text.displayName = 'Text';

export { Text };

import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { sizes } from '../../themes/templates/lightFractalTheme';
import { BaseTextField } from './BaseTextField';
import { TextFieldProps } from './BaseTextField/types';
import { getTextFieldAccessibilityProps } from './accessibility/getTextFieldAccessibilityProps';

const TextField = forwardRef((props: TextFieldProps, ref: any): JSX.Element => {
    const { colors, borderRadius, spacings } = useTheme();

    return (
        <BaseTextField
            ref={ref}
            borderRadius={borderRadius.s}
            color={colors.text}
            backgroundColor={colors.textField}
            placeholderTextColor={colors.placeholder}
            fontSize={14}
            paddingRight={spacings.s}
            paddingLeft={spacings.s}
            height={sizes.textFieldHeight}
            {...getTextFieldAccessibilityProps()}
            {...props}
        />
    );
});

TextField.displayName = 'TextField';

export { TextField };

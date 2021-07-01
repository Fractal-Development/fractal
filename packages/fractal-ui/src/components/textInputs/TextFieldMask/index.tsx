import React, { forwardRef, useState } from 'react';
import { TextField } from '../TextField';
import { useUpdateValue } from './hooks/useUpdateValue';
import { TextFieldMaskProps } from './types';
import { getTextFieldMaskAccessibilityProps } from '../accessibility/getTextFieldMaskAccessibilityProps';

const TextFieldMask = forwardRef(({ onChangeText, type, ...others }: TextFieldMaskProps, ref: any): JSX.Element => {
    const [value, setValue] = useState('');

    const updateValue = useUpdateValue(type);

    const handleChangeText = (text: string) => {
        const { maskedText, rawText } = updateValue(text, value);
        setValue(maskedText);
        onChangeText?.(maskedText, rawText);
    };

    return <TextField ref={ref} value={value} onChangeText={handleChangeText} {...getTextFieldMaskAccessibilityProps()} {...others} />;
});

TextFieldMask.displayName = 'TextFieldMask';

export { TextFieldMask };

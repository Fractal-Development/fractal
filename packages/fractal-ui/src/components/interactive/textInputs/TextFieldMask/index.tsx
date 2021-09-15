import React, { forwardRef, useState } from 'react';
import { TextField } from '../TextField';
import { useUpdateValue } from './hooks/useUpdateValue';
import { TextFieldMaskProps } from './types';
import { getTextFieldMaskAccessibilityProps } from '../accessibility/getTextFieldMaskAccessibilityProps';

const TextFieldMask = forwardRef(({ defaultValue, onChangeText, type, ...others }: TextFieldMaskProps, ref: any): JSX.Element => {
    const updateValue = useUpdateValue(type);
    const defaultMaskedText = defaultValue ? updateValue(defaultValue, '').maskedText : '';
    const [value, setValue] = useState(defaultMaskedText);

    const handleChangeText = (text: string) => {
        const { maskedText, rawText } = updateValue(text, value);
        setValue(maskedText);
        onChangeText?.(maskedText, rawText);
    };

    return <TextField ref={ref} value={value} onChangeText={handleChangeText} {...getTextFieldMaskAccessibilityProps()} {...others} />;
});

TextFieldMask.displayName = 'TextFieldMask';

export { TextFieldMask };

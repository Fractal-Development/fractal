import { TextFieldProps } from '../BaseTextField/types';

export type MaskType = 'money' | 'phone';

export interface TextFieldMaskProps extends Omit<TextFieldProps, 'onChangeText' | 'value'> {
    type: MaskType;
    onChangeText?: (maskedText: string, rawText: string) => void;
}

export interface MaskResponse {
    maskedText: string;
    rawText: string;
}

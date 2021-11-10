import { FractalTextProps, PlaceholderProps, FractalSharedStyleProps, AnimationProps } from '../../../../sharedProps';

interface BaseTextInputProps {
    value?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    secureTextEntry?: boolean;
}

export interface TextFieldProps extends FractalSharedStyleProps, AnimationProps, BaseTextInputProps, FractalTextProps, PlaceholderProps {
    style?: any;
}

import { PlaceholderProps, FractalSharedStyleProps, AnimationProps, TextStyleProps } from '../../../../sharedProps';

export type KeyboardTypeOptions = 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';

interface BaseTextInputProps {
    value?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    keyboardType?: KeyboardTypeOptions;
}

export interface TextFieldProps extends FractalSharedStyleProps, AnimationProps, BaseTextInputProps, TextStyleProps, PlaceholderProps {
    style?: any;
}

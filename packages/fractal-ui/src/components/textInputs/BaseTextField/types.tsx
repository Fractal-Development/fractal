import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
import { PlaceholderProps } from '../../../sharedProps/PlaceholderProps';
import { TextProps as FractalTextProps } from '../../../sharedProps/TextProps';

interface BaseTextInputProps {
    value?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
}

export interface TextFieldProps extends FractalSharedProps, AnimationProps, BaseTextInputProps, FractalTextProps, PlaceholderProps {
    style?: any;
}

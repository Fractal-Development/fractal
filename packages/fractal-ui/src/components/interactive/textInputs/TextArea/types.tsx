import { PlaceholderProps, FractalSharedStyleProps, AnimationProps, TextStyleProps } from '../../../../sharedProps';

interface BaseTextAreaProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    numberOfLines?: number;
    editable?: boolean;
}

export interface TextAreaProps extends FractalSharedStyleProps, AnimationProps, BaseTextAreaProps, TextStyleProps, PlaceholderProps {
    style?: any;
}

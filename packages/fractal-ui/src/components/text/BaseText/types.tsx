import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
import { TextProps as FractalTextProps } from '../../../sharedProps/TextProps';
import { FractalThemeTextVariants } from '../../../themes/FractalTheme';
import { RequiredKeys } from 'utility-types';

interface DefaultTexProps {
    allowFontScaling?: boolean;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip';
    numberOfLines?: number;
    onLayout?: (event: any) => void;
    onTextLayout?: (event: any) => void;
    onPress?: (event: any) => void;
    onLongPress?: (event: any) => void;
    testID?: string;
    nativeID?: string;
    maxFontSizeMultiplier?: number | null;
    // TextPropsIOS
    adjustsFontSizeToFit?: boolean;
    minimumFontScale?: number;
    suppressHighlighting?: boolean;
    // TextPropsAndroid
    selectable?: boolean;
    selectionColor?: string;
    textBreakStrategy?: 'simple' | 'highQuality' | 'balanced';
    dataDetectorType?: null | 'phoneNumber' | 'link' | 'email' | 'none' | 'all';
    android_hyphenationFrequency?: 'normal' | 'none' | 'full' | 'high' | 'balanced';
}

export interface TextProps extends FractalSharedProps, AnimationProps, DefaultTexProps, FractalTextProps {
    children?: string | number;
    style?: any;
    variant?: RequiredKeys<FractalThemeTextVariants>;
}

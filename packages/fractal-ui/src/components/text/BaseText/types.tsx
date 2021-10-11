import { RequiredKeys } from 'utility-types';
import { ReactElement } from 'react';
import { AnimationProps, FractalSharedStyleProps, FractalTextProps } from '../../../sharedProps';
import { FractalThemeTextVariants } from '../../../themes';

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

export interface TextProps extends FractalSharedStyleProps, AnimationProps, DefaultTexProps, FractalTextProps {
    children?: string | number | ReactElement | Array<ReactElement>;
    style?: any;
    variant?: RequiredKeys<FractalThemeTextVariants>;
}

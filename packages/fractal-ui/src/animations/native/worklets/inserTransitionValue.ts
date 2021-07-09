import { ViewStyle } from 'react-native';
import { OptionalKeys } from 'utility-types';
import { FractalSharedAnimationProps } from '../../../sharedProps';

export function insertTransitionValue(
    animatedStyles: ViewStyle,
    propertyName: OptionalKeys<FractalSharedAnimationProps>,
    value?: number | string
): void {
    'worklet';

    if (value != null) {
        animatedStyles[propertyName] = value;
    }
}

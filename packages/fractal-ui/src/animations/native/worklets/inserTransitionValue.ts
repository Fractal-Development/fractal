import { ViewStyle } from 'react-native';
import { OptionalKeys } from 'utility-types';
import { AnimationContent } from '../../../sharedProps';

export function insertTransitionValue(
    animatedStyles: ViewStyle,
    propertyName: OptionalKeys<AnimationContent>,
    value?: number | string
): void {
    'worklet';

    if (value != null) {
        animatedStyles[propertyName] = value;
    }
}

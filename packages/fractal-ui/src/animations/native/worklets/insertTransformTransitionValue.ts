import { ViewStyle } from 'react-native';
import { OptionalKeys } from 'utility-types';

import { FractalSharedAnimationProps } from '../../../sharedProps';

export function insertTransformTransitionValue(
    animatedStyles: ViewStyle,
    propertyName: OptionalKeys<FractalSharedAnimationProps>,
    value?: number | string
): void {
    'worklet';

    if (value != null) {
        const transformObject: any = {};

        transformObject[propertyName] = value;

        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform.push(transformObject);
        }
    }
}

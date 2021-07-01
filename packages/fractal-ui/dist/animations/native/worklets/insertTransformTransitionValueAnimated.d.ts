import { ViewStyle } from 'react-native';
import { AnimationContent, FractalTransition } from '../../../sharedProps';
import { OptionalKeys } from 'utility-types';
export declare function insertTransformTransitionValueAnimated(animatedStyles: ViewStyle, propertyName: OptionalKeys<AnimationContent>, value?: number | string, transition?: FractalTransition, callback?: ((finished: boolean) => void) | null): void;

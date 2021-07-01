import { PressableProps } from '../../../components/buttons/Pressable/types';
import { ViewStyle } from 'react-native';
import { useSharedValueCallbacks } from './useSharedValueCallbacks';
import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { useColorAnimationCallbacks } from './useColorAnimationCallbacks';
import { insertTransitionValue } from '../worklets/inserTransitionValue';
import { insertTransformTransitionValue } from '../worklets/insertTransformTransitionValue';

export function usePressableAnimationStyles({
    whileTap,
    opacity,
    width,
    height,
    backgroundColor,
    onPressOut,
    onPressIn
}: PressableProps): [ViewStyle, () => void, () => void] {
    const [opacityAnimatedValue, animateOpacity, resetOpacity] = useSharedValueCallbacks(opacity ?? 1, whileTap?.opacity);
    const [widthAnimatedValue, animateWidth, resetWidth] = useSharedValueCallbacks(width ?? '100%', whileTap?.width);
    const [heightAnimatedValue, animateHeight, resetHeight] = useSharedValueCallbacks(height ?? 0, whileTap?.height);
    const [scaleAnimatedValue, animateScale, resetScale] = useSharedValueCallbacks(1, whileTap?.scale);
    const [rotationAnimatedValue, animateRotation, resetRotation] = useSharedValueCallbacks('0deg', whileTap?.rotate);
    const [backgroundColorAnimatedValue, backgroundColors, animateBackgroundColor, resetBackgroundColor] = useColorAnimationCallbacks(
        backgroundColor,
        whileTap?.backgroundColor
    );

    const handlePressIn = () => {
        animateOpacity();
        animateBackgroundColor();
        animateWidth();
        animateHeight();
        animateScale();
        animateRotation();

        if (onPressIn) {
            onPressIn();
        }
    };

    const handlePressOut = () => {
        resetOpacity();
        resetBackgroundColor();
        resetWidth();
        resetHeight();
        resetScale();
        resetRotation();

        if (onPressOut) {
            onPressOut();
        }
    };

    const tapStyles = useAnimatedStyle(() => {
        const styles = {
            transform: []
        };

        insertTransitionValue(styles, 'opacity', opacityAnimatedValue.value);
        insertTransitionValue(styles, 'width', widthAnimatedValue.value);
        insertTransitionValue(styles, 'height', heightAnimatedValue.value);

        if (backgroundColors.length === 2) {
            styles['backgroundColor'] = interpolateColor(backgroundColorAnimatedValue.value, [0, 1], backgroundColors);
        }

        insertTransformTransitionValue(styles, 'scale', scaleAnimatedValue.value);
        insertTransformTransitionValue(styles, 'rotate', rotationAnimatedValue.value);

        return styles;
    });

    return [tapStyles, handlePressIn, handlePressOut];
}

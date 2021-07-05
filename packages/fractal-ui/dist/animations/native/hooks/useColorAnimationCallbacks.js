import { useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback } from 'react';
export function useColorAnimationCallbacks(backgroundColor, pressedBackgroundColor) {
    const animatedValue = useSharedValue(0);
    const initialPressDone = useSharedValue(false);
    const colorsAvailable = backgroundColor != null && pressedBackgroundColor != null;
    const colors = (() => {
        const colors = Array();
        if (backgroundColor != null) {
            colors.push(backgroundColor);
        }
        if (pressedBackgroundColor != null) {
            colors.push(pressedBackgroundColor);
        }
        return colors;
    })();
    const startAnimation = useCallback(() => {
        initialPressDone.value = true;
        if (colorsAvailable) {
            animatedValue.value = withTiming(1);
        }
    }, [animatedValue, colorsAvailable, initialPressDone]);
    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = withTiming(0);
        }
    }, [animatedValue, colorsAvailable]);
    return [animatedValue, colors, startAnimation, resetAnimation, initialPressDone];
}
//# sourceMappingURL=useColorAnimationCallbacks.js.map
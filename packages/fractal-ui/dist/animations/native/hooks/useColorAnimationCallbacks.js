import { useSharedValue } from 'react-native-reanimated';
import { useCallback } from 'react';
export function useColorAnimationCallbacks(backgroundColor, pressedBackgroundColor) {
    const animatedValue = useSharedValue(backgroundColor);
    const colorsAvailable = backgroundColor != null && pressedBackgroundColor != null;
    const startAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = pressedBackgroundColor;
        }
    }, [animatedValue, colorsAvailable, pressedBackgroundColor]);
    const resetAnimation = useCallback(() => {
        if (colorsAvailable) {
            animatedValue.value = backgroundColor;
        }
    }, [animatedValue, colorsAvailable, backgroundColor]);
    return [animatedValue, startAnimation, resetAnimation];
}
//# sourceMappingURL=useColorAnimationCallbacks.js.map
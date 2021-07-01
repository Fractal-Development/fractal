import { useSharedValue, withSpring } from 'react-native-reanimated';
import { useCallback } from 'react';
export function useSharedValueCallbacks(initialValue, finalValue) {
    const animatedValue = useSharedValue(initialValue);
    const startAnimation = useCallback(() => {
        if (finalValue != null && animatedValue.value !== finalValue) {
            animatedValue.value = withSpring(finalValue);
        }
    }, [animatedValue, finalValue]);
    const resetAnimation = useCallback(() => {
        if (initialValue != null && animatedValue.value !== initialValue) {
            animatedValue.value = withSpring(initialValue);
        }
    }, [animatedValue, initialValue]);
    return [animatedValue, startAnimation, resetAnimation];
}
//# sourceMappingURL=useSharedValueCallbacks.js.map
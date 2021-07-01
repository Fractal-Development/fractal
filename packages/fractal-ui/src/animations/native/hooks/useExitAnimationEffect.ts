import Reanimated from 'react-native-reanimated';
import { useEffect } from 'react';

export function useExitAnimationEffect(
    animatedValue: Reanimated.SharedValue<string | number | undefined>,
    exitValue: number | string | undefined,
    isPresent = true
): void {
    useEffect(() => {
        if (exitValue != null && !isPresent) {
            animatedValue.value = exitValue;
        }
    }, [exitValue, isPresent, animatedValue]);
}

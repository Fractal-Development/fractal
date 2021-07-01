import { useEffect } from 'react';
export function useFinalAnimationEffect(animatedValue, finalValue, isPresent = true) {
    useEffect(() => {
        if (finalValue != null && isPresent) {
            animatedValue.value = finalValue;
        }
    }, [finalValue, animatedValue, isPresent]);
}
//# sourceMappingURL=useFinalAnimationEffect.js.map
import { useEffect } from 'react';
export function useExitAnimationEffect(animatedValue, exitValue, isPresent = true) {
    useEffect(() => {
        if (exitValue != null && !isPresent) {
            animatedValue.value = exitValue;
        }
    }, [exitValue, isPresent, animatedValue]);
}
//# sourceMappingURL=useExitAnimationEffect.js.map
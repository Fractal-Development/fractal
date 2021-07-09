import { useEffect } from 'react';
import { useAnimationState } from '@motify/core';
export function useVariantState(currentVariant, variants = { from: {} }) {
    const animationState = useAnimationState(variants);
    useEffect(() => {
        if (currentVariant && variants) {
            animationState.transitionTo(currentVariant);
        }
    }, [animationState, currentVariant, variants]);
    return currentVariant && variants ? animationState : undefined;
}
//# sourceMappingURL=useVariantState.js.map
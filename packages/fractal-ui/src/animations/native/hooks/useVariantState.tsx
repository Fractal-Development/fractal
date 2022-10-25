import { useAnimationState, UseAnimationState } from 'moti';
import { useEffect } from 'react';

import { FractalVariants } from '../../../sharedProps/AnimationProps';

export function useVariantState(
    currentVariant: string | undefined,
    variants: FractalVariants | undefined = { from: {} }
): UseAnimationState<any> | undefined {
    const animationState = useAnimationState(variants as any);

    useEffect(() => {
        if (currentVariant && variants) {
            animationState.transitionTo(currentVariant);
        }
    }, [animationState, currentVariant, variants]);

    return currentVariant && variants ? animationState : undefined;
}

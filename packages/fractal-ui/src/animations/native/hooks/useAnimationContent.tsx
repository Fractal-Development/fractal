import { AnimationContent, isAnimationContent, Variants } from '../../../sharedProps/AnimationProps';

export const emptyAnimationContent: AnimationContent = {
    opacity: undefined,
    width: undefined,
    height: undefined,
    scale: 1,
    rotate: undefined,
    backgroundColor: undefined,
    translateY: undefined
};

export function useAnimationContent(value: AnimationContent | string | undefined, variants: Variants | undefined): AnimationContent {
    if (typeof value === 'string' && variants != null) {
        // Styles are inside variants and we get the object with the key
        return variants[value] ?? emptyAnimationContent;
    } else if (isAnimationContent(value)) {
        return value;
    } else {
        return emptyAnimationContent;
    }
}

import { isAnimationContent } from '../../../sharedProps/AnimationProps';
export const emptyAnimationContent = {
    opacity: undefined,
    width: undefined,
    height: undefined,
    scale: 1,
    rotate: undefined,
    backgroundColor: undefined,
    translateY: undefined
};
export function useAnimationContent(value, variants) {
    var _a;
    if (typeof value === 'string' && variants != null) {
        // Styles are inside variants and we get the object with the key
        return (_a = variants[value]) !== null && _a !== void 0 ? _a : emptyAnimationContent;
    }
    else if (isAnimationContent(value)) {
        return value;
    }
    else {
        return emptyAnimationContent;
    }
}
//# sourceMappingURL=useAnimationContent.js.map
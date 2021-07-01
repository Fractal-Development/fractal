import { Easing, runOnJS, withSpring, withTiming } from 'react-native-reanimated';
export function insertTransitionValueAnimated(animatedStyles, propertyName, value, transition, callback) {
    'worklet';
    if (value != null) {
        const animationCallback = (finished) => {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        };
        if ((transition === null || transition === void 0 ? void 0 : transition.type) === 'ease' && (transition === null || transition === void 0 ? void 0 : transition.duration) != null) {
            const animationConfig = {
                duration: transition === null || transition === void 0 ? void 0 : transition.duration,
                easing: Easing.inOut(Easing.ease)
            };
            animatedStyles[propertyName] = withTiming(value, animationConfig, animationCallback);
        }
        else {
            animatedStyles[propertyName] = withSpring(value, undefined, animationCallback);
        }
    }
}
//# sourceMappingURL=insertTransitionValueAnimated.js.map
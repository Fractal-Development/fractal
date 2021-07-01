import { Easing, runOnJS, withSpring, withTiming } from 'react-native-reanimated';
export function insertTransformTransitionValueAnimated(animatedStyles, propertyName, value, transition, callback) {
    'worklet';
    if (value != null) {
        const transformObject = {};
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
            transformObject[propertyName] = withTiming(value, animationConfig, animationCallback);
        }
        else {
            transformObject[propertyName] = withSpring(value, undefined, animationCallback);
        }
        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform.push(transformObject);
        }
    }
}
//# sourceMappingURL=insertTransformTransitionValueAnimated.js.map
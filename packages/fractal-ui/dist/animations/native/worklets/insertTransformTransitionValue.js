export function insertTransformTransitionValue(animatedStyles, propertyName, value) {
    'worklet';
    if (value != null) {
        const transformObject = {};
        transformObject[propertyName] = value;
        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform.push(transformObject);
        }
    }
}
//# sourceMappingURL=insertTransformTransitionValue.js.map
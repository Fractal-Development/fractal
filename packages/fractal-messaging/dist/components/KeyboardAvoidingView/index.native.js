import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
export function KeyboardAvoidingView({ children, keyboardVerticalOffset: keyboardVerticalOffsetProp, behavior: behaviorProp }) {
    const keyboardVerticalOffset = (keyboardVerticalOffsetProp !== null && keyboardVerticalOffsetProp !== void 0 ? keyboardVerticalOffsetProp : Platform.OS === 'ios') ? undefined : -150;
    const behavior = (behaviorProp !== null && behaviorProp !== void 0 ? behaviorProp : Platform.OS === 'ios') ? 'padding' : 'height';
    return (React.createElement(RNKeyboardAvoidingView, { keyboardVerticalOffset: keyboardVerticalOffset, behavior: behavior, style: { flex: 1 } }, children));
}
//# sourceMappingURL=index.native.js.map
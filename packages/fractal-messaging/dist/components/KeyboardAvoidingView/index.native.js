import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
export function KeyboardAvoidingView({ children }) {
    return (React.createElement(RNKeyboardAvoidingView, { keyboardVerticalOffset: Platform.OS === 'ios' ? undefined : -150, behavior: Platform.OS === 'ios' ? 'padding' : 'height', style: { flex: 1 } }, children));
}
//# sourceMappingURL=index.native.js.map
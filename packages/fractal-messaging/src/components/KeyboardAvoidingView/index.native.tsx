import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAvoidingViewProps } from './types';

export function KeyboardAvoidingView({
    children,
    keyboardVerticalOffset: keyboardVerticalOffsetProp,
    behavior: behaviorProp
}: KeyboardAvoidingViewProps): JSX.Element {
    const keyboardVerticalOffset = keyboardVerticalOffsetProp ?? Platform.OS === 'ios' ? undefined : -150;
    const behavior = behaviorProp ?? Platform.OS === 'ios' ? 'padding' : 'height';

    return (
        <RNKeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior={behavior} style={{ flex: 1 }}>
            {children}
        </RNKeyboardAvoidingView>
    );
}

import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAvoidingViewProps } from './types';

export function KeyboardAvoidingView({ children }: KeyboardAvoidingViewProps): JSX.Element {
    return (
        <RNKeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : -150}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            {children}
        </RNKeyboardAvoidingView>
    );
}

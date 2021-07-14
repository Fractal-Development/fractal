import React, { Fragment } from 'react';
import { KeyboardAvoidingViewProps } from './types';

export function KeyboardAvoidingView({ children }: KeyboardAvoidingViewProps): JSX.Element {
    return <Fragment>{children}</Fragment>;
}

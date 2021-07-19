import { ReactNode } from 'react';

export interface KeyboardAvoidingViewProps {
    children: ReactNode;
    keyboardVerticalOffset?: number;
    behavior?: 'padding' | 'height' | 'position';
}

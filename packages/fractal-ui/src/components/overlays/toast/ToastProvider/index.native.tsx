import React, { ReactNode } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';

interface ToastProviderProps {
    children?: ReactNode | ReactNode[];
}

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    return <RootSiblingParent>{children}</RootSiblingParent>;
}

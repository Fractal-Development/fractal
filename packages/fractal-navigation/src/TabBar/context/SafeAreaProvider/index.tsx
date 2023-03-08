import React, { useCallback, useState } from 'react';
import { WebSafeAreaProvider } from './WebSafeAreaProvider';
import { EdgeInsets } from '../../../types/EdgeInsets';
import { SafeAreaInsetsContext } from '../SafeAreaInsetsContext';

interface Metrics {
    insets: EdgeInsets;
}

export interface SafeAreaProviderProps {
    children?: React.ReactNode;
    initialMetrics?: Metrics | null;
}

export function SafeAreaProvider({ children, initialMetrics }: SafeAreaProviderProps) {
    const [insets, setInsets] = useState<EdgeInsets | null>(initialMetrics?.insets ?? null);

    const onInsetsChange = useCallback(
        (nextInsets: any) => {
            if (
                !insets ||
                nextInsets.bottom !== insets.bottom ||
                nextInsets.left !== insets.left ||
                nextInsets.right !== insets.right ||
                nextInsets.top !== insets.top
            ) {
                setInsets(nextInsets);
            }
        },
        [insets]
    );

    return (
        <WebSafeAreaProvider onInsetsChange={onInsetsChange}>
            {insets != null ? <SafeAreaInsetsContext.Provider value={insets}>{children}</SafeAreaInsetsContext.Provider> : null}
        </WebSafeAreaProvider>
    );
}

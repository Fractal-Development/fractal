import { useCallback } from 'react';

export function useTabPress(tabIdentifier: string, onTabPress?: (tabIdentifier: string) => void): () => void {
    return useCallback(() => {
        onTabPress?.(tabIdentifier);
    }, [onTabPress, tabIdentifier]);
}

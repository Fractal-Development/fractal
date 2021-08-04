import { useCallback } from 'react';
import { SharedTabItemProps } from '../types/SharedTabItemProps';

export function useTabPress({ tabIdentifier, onTabPress }: SharedTabItemProps): () => void {
    return useCallback(() => {
        onTabPress?.(tabIdentifier);
    }, [onTabPress, tabIdentifier]);
}

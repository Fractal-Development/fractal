import { useCallback } from 'react';

export function useOpenURL(): (url: string) => void {
    return useCallback((url: string): void => {
        window.open(url, '_blank');
    }, []);
}

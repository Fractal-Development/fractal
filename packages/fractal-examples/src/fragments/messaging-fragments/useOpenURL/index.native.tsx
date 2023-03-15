import { useCallback } from 'react';
import { Linking } from 'react-native';

export function useOpenURL(): (url: string) => void {
    return useCallback((url: string): void => {
        Linking.openURL(url);
    }, []);
}

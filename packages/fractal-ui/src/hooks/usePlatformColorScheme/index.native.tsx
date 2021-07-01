import { useColorScheme } from 'react-native';

export function usePlatformColorScheme(): 'light' | 'dark' {
    return useColorScheme() ?? 'light';
}

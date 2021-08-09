import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export function useNavigationRouteStyles(style: any): any {
    return useMemo(() => [StyleSheet.absoluteFill, style], [style]);
}

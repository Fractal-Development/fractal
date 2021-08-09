import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
export function useNavigationRouteStyles(style) {
    return useMemo(() => [StyleSheet.absoluteFill, style], [style]);
}
//# sourceMappingURL=index.native.js.map
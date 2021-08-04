import { useCallback } from 'react';
export function useTabPress({ tabIdentifier, onTabPress }) {
    return useCallback(() => {
        onTabPress === null || onTabPress === void 0 ? void 0 : onTabPress(tabIdentifier);
    }, [onTabPress, tabIdentifier]);
}
//# sourceMappingURL=useTabPress.js.map
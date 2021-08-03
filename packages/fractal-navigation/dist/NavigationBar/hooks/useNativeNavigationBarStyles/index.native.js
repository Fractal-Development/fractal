import { useMemo } from 'react';
import { useTheme } from '@bma98/fractal-ui';
export function usePlatformBarStyles() {
    const { navigationBar } = useTheme();
    return useMemo(() => {
        return {
            backgroundColor: navigationBar.backgroundColor,
            color: navigationBar.textButton.color,
            titleColor: navigationBar.title.color,
            titleFontSize: navigationBar.title.fontSize,
            titleFontWeight: navigationBar.title.fontWeight
        };
    }, [navigationBar]);
}
//# sourceMappingURL=index.native.js.map
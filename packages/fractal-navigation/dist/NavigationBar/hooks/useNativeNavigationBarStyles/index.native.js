import { useMemo } from 'react';
import { useTheme } from '@bma98/fractal-ui';
export function usePlatformBarStyles() {
    const { colors } = useTheme();
    return useMemo(() => {
        return {
            backgroundColor: colors.foreground,
            titleColor: colors.text,
            color: colors.mainInteractiveColor
        };
    }, [colors]);
}
//# sourceMappingURL=index.native.js.map
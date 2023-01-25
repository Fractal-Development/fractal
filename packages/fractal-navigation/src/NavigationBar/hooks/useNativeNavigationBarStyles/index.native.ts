import { useMemo } from 'react';
import { useTheme } from '@fractal/fractal-ui';

export function usePlatformBarStyles(): unknown {
    const { navigationBar } = useTheme();

    return useMemo(
        () => ({
            backgroundColor: navigationBar.backgroundColor,
            color: navigationBar.textButton.color,
            titleColor: navigationBar.title.color,
            titleFontSize: navigationBar.title.fontSize,
            titleFontWeight: navigationBar.title.fontWeight
        }),
        [navigationBar]
    );
}

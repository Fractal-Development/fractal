import { useContext, useLayoutEffect } from 'react';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';
import { useTheme } from '@bma98/fractal-ui';

export function useSetNavigationBarInsets(): void {
    const setInsets = useContext(NavigationBarInsetsContext)[1];
    const { navigationBar } = useTheme();

    useLayoutEffect(() => {
        setInsets({ top: navigationBar.height, right: 0, left: 0, bottom: 0 });
    }, [navigationBar.height, setInsets]);
}

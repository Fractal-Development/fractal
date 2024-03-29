import { useContext, useLayoutEffect } from 'react';
import { useTheme } from '@fractal-software/fractal-ui';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';

export function useSetNavigationBarInsets(): void {
    const setInsets = useContext(NavigationBarInsetsContext)[1];
    const { navigationBar } = useTheme();

    useLayoutEffect(() => {
        setInsets({ top: navigationBar.height, right: 0, left: 0, bottom: 0 });
    }, [navigationBar.height, setInsets]);
}

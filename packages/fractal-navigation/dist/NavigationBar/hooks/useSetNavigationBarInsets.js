import { useContext, useLayoutEffect } from 'react';
import { useTheme } from '@bma98/fractal-ui';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';
export function useSetNavigationBarInsets() {
    const setInsets = useContext(NavigationBarInsetsContext)[1];
    const { navigationBar } = useTheme();
    useLayoutEffect(() => {
        setInsets({ top: navigationBar.height, right: 0, left: 0, bottom: 0 });
    }, [navigationBar.height, setInsets]);
}
//# sourceMappingURL=useSetNavigationBarInsets.js.map
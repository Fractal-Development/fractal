import { useContext, useEffect } from 'react';
import { NavigationBarInsetsContext } from '../context/NavigationBarInsetsProvider';
import { useTheme } from '@bma98/fractal-ui';
export function useSetNavigationBarInsets() {
    const setInsets = useContext(NavigationBarInsetsContext)[1];
    const { navigationBar } = useTheme();
    useEffect(() => {
        setInsets({ top: navigationBar.height, right: 0, left: 0, bottom: 0 });
    }, [navigationBar.height, setInsets]);
}
//# sourceMappingURL=useSetNavigationBarInsets.js.map
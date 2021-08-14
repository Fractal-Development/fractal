import { useCallback, useContext } from 'react';
import { TabBarIsHiddenContext } from '../context';
export function useToggleTabBarHidden() {
    const [, setTabBarIsHidden] = useContext(TabBarIsHiddenContext);
    return useCallback(() => {
        setTabBarIsHidden((current) => !current);
    }, []);
}
//# sourceMappingURL=useToggleTabBarHidden.js.map
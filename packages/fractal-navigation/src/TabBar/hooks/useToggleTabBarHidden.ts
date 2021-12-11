import { useCallback, useContext } from 'react';
import { TabBarIsHiddenContext } from '../context';

export function useToggleTabBarHidden(): () => void {
    const [, setTabBarIsHidden] = useContext(TabBarIsHiddenContext);

    return useCallback(() => {
        setTabBarIsHidden((current) => !current);
    }, [setTabBarIsHidden]);
}

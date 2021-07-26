import { useContext } from 'react';
import { TabBarIsHiddenContext } from '../context/TabBarIsHiddenProvider';

export function useTabBarIsHidden(): boolean {
    const [hidden] = useContext(TabBarIsHiddenContext);
    return hidden;
}

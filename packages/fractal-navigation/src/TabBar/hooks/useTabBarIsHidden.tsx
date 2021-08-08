import { useContext } from 'react';
import { TabBarIsHiddenContext } from '../context';

export function useTabBarIsHidden(): boolean {
    const [hidden] = useContext(TabBarIsHiddenContext);
    return hidden;
}

import { useContext } from 'react';
import { EdgeInsets } from '../types';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';

export function useTabBarInsets(): EdgeInsets {
    const [insets] = useContext(TabBarInsetsContext);
    return insets;
}

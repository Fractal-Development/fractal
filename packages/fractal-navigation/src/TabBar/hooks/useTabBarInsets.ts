import { useContext } from 'react';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';
import { EdgeInsets } from '../../types';

export function useTabBarInsets(): EdgeInsets {
    const [insets] = useContext(TabBarInsetsContext);
    return insets;
}

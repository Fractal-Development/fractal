import { useContext } from 'react';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
import { TabBarPosition } from '../types';

export function useTabBarPosition(): TabBarPosition {
    const [position] = useContext(TabBarPositionContext);
    return position;
}

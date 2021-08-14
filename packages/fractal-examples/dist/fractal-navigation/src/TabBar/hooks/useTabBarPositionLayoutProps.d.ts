import { TabBarPosition } from '../types';
interface PositionValue {
    width: string | number;
    height: string | number;
    flexDirection: 'row' | 'column';
    bottom?: number;
    left?: number;
    right?: number;
    translateY: number;
    translateX: number;
}
export declare function useTabBarPositionLayoutProps(tabBarPosition: TabBarPosition): PositionValue;
export {};

import { TabBarPosition } from '../types';
export declare type TabBarPaddingStyles = {
    paddingBottom: number;
} | {
    paddingLeft: number;
} | {
    paddingRight: number;
};
export declare function useTabBarSafeAreaPadding(tabBarPosition: TabBarPosition): TabBarPaddingStyles;

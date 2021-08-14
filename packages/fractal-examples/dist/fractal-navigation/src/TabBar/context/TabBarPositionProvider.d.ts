import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { TabBarPosition } from '../types';
export declare type TabBarPositionContextType = [TabBarPosition, Dispatch<SetStateAction<TabBarPosition>>];
export declare const TabBarPositionContext: React.Context<TabBarPositionContextType>;
interface TabBarPositionProviderProps {
    children: ReactNode;
}
export declare function TabBarPositionProvider({ children }: TabBarPositionProviderProps): JSX.Element;
export {};

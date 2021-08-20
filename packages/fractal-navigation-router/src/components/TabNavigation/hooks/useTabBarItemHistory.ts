import { useContext } from 'react';
import { TabBarItemsHistoryContext, TabBarItemsHistoryContextType } from '../context/TabBarItemsHistoryProvider';

export function useTabBarItemHistory(): TabBarItemsHistoryContextType {
    return useContext(TabBarItemsHistoryContext);
}

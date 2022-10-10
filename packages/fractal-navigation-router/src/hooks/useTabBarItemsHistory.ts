import { useContext } from 'react';
import { TabBarItemsHistoryContext, TabBarItemsHistoryContextType } from '../context/TabBarItemsHistoryProvider';

export function useTabBarItemsHistory(): TabBarItemsHistoryContextType {
    return useContext(TabBarItemsHistoryContext);
}

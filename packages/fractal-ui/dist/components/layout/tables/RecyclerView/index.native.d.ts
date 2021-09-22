import React from 'react';
import { RecyclerListViewProps, LayoutProvider, DataProvider } from 'recyclerlistview';
export interface RecyclerViewProps extends Omit<RecyclerListViewProps, 'style'> {
    style?: any;
}
declare const RecyclerView: React.ForwardRefExoticComponent<RecyclerViewProps & React.RefAttributes<unknown>>;
export { RecyclerView, LayoutProvider, DataProvider };

import React, { forwardRef } from 'react';
import { RecyclerListViewProps, RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview';

export interface RecyclerViewProps extends Omit<RecyclerListViewProps, 'style'> {
    style?: any;
}
const RecyclerView = forwardRef((props: RecyclerViewProps, ref?: any): JSX.Element => <RecyclerListView ref={ref} {...props} />);

RecyclerView.displayName = 'RecyclerView';

export { RecyclerView, LayoutProvider, DataProvider };

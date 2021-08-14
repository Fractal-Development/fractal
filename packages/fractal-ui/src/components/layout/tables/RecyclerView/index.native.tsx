import React from 'react';
import { RecyclerListViewProps, RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview';

export interface RecyclerViewProps extends Omit<RecyclerListViewProps, 'style'> {
    style?: any;
}
function RecyclerView(props: RecyclerViewProps): JSX.Element {
    return <RecyclerListView {...props} />;
}

export { RecyclerView, LayoutProvider, DataProvider };

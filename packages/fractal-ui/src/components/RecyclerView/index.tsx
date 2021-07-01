import React from 'react';
import { RecyclerListViewProps, RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview/web';
import AutoSizer from 'react-virtualized-auto-sizer';

export interface RecyclerViewProps extends RecyclerListViewProps {
    key: string | number;
}

function RecyclerView(props: RecyclerViewProps): JSX.Element {
    return <AutoSizer>{({ height, width }) => <RecyclerListView style={{ width, height }} {...props} />}</AutoSizer>;
}

export { RecyclerView, LayoutProvider, DataProvider };

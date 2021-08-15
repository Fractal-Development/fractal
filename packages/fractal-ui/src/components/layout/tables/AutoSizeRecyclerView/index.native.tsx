import React, { ReactElement } from 'react';
import { RecyclerView, RecyclerViewProps } from '../RecyclerView';

export function AutoSizeRecyclerView(props: RecyclerViewProps): ReactElement {
    return <RecyclerView {...props} />;
}

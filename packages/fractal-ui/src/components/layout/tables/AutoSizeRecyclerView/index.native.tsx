import React, { ReactElement } from 'react';
import { RecyclerView, RecyclerViewProps } from '../RecyclerView';

export function AutoSizeRecyclerView({ style, ...others }: RecyclerViewProps): ReactElement {
    return <RecyclerView style={[{ flex: 1 }, style]} {...others} />;
}

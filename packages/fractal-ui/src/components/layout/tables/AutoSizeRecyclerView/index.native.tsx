import React, { ReactElement, forwardRef } from 'react';
import { RecyclerView, RecyclerViewProps } from '../RecyclerView';

const AutoSizeRecyclerView = forwardRef((props: RecyclerViewProps, ref?: any): ReactElement => <RecyclerView ref={ref} {...props} />);

AutoSizeRecyclerView.displayName = 'AutoSizeRecyclerView';

export { AutoSizeRecyclerView };

import React from 'react';
import { Layer } from '../Layer';
import { ScrollViewProps } from './types';

export function ScrollView(props: ScrollViewProps): JSX.Element {
    const { horizontal } = props;
    return (
        <Layer
            overflowX={horizontal ? 'scroll' : 'hidden'}
            overflowY={horizontal ? 'hidden' : 'scroll'}
            flexDirection={horizontal ? 'row' : 'column'}
            {...props}
        />
    );
}

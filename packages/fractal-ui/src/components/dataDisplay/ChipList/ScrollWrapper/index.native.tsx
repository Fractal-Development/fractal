import React from 'react';
import { Layer, LayerProps, ScrollView } from '../../../layout';

export function ScrollWrapper({ children, ...others }: LayerProps): JSX.Element {
    return (
        <Layer {...others}>
            <ScrollView flexDirection={'row'} flexWrap={'wrap'}>
                {children}
            </ScrollView>
        </Layer>
    );
}

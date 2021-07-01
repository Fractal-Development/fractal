import React from 'react';
import { ScrollView } from 'react-native';
import { Layer } from '../../containers/Layer';
import { LayerProps } from '../../containers/Layer/types';

export function ScrollWrapper({ children, ...others }: LayerProps): JSX.Element {
    return (
        <Layer {...others}>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>{children}</ScrollView>
        </Layer>
    );
}

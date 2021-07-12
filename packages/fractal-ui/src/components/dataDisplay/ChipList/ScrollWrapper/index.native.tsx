import React from 'react';
import { ScrollView } from 'react-native';
import { Layer, LayerProps } from '../../../layout';

export function ScrollWrapper({ children, ...others }: LayerProps): JSX.Element {
    return (
        <Layer {...others}>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>{children}</ScrollView>
        </Layer>
    );
}

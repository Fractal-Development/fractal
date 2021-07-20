import React from 'react';
import { View } from 'react-native';
import { VerticalLayerProps } from './VerticalLayerProps';

export function VerticalLayer({ children }: VerticalLayerProps): JSX.Element {
    return (
        <View
            style={{
                width: 130,
                height: 24,
                position: 'absolute',
                transform: [{ rotate: '-90deg' }, { translateY: -53 }, { translateX: -53 }]
            }}
        >
            {children}
        </View>
    );
}

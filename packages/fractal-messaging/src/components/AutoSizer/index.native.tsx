import React, { useState } from 'react';
import { Layer } from '@fractal/fractal-ui';
import { LayoutChangeEvent } from 'react-native';
import { AutoSizerProps, Size } from './types';

export function AutoSizer({ children, onResize }: AutoSizerProps): JSX.Element {
    const [size, setSize] = useState<Size>();

    const handleLayout = (event: LayoutChangeEvent) => {
        const {
            nativeEvent: {
                layout: { width, height }
            }
        } = event;

        setSize({ width, height });
        onResize?.({ width, height });
    };

    return (
        <Layer onLayout={handleLayout} flex={1}>
            {size && children(size)}
        </Layer>
    );
}

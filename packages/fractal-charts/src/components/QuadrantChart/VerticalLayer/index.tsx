import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { VerticalLayerProps } from './VerticalLayerProps';

export function VerticalLayer({ children }: VerticalLayerProps): JSX.Element {
    return (
        <Layer width={130} height={24} position="absolute" style={{ transform: 'translateX(-53px) translateY(53px) rotate(-90deg)' }}>
            {children}
        </Layer>
    );
}

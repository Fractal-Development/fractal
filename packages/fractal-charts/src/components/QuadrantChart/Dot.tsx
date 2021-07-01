import React from 'react';
import { Layer } from '@bma98/fractal-ui';

const SIZE = 8;

interface DotProps {
    color: string;
    addSpacing?: boolean;
}

export function Dot({ color, addSpacing }: DotProps): JSX.Element {
    return <Layer backgroundColor={color} width={SIZE} height={SIZE} borderRadius={SIZE / 2} marginBottom={addSpacing ? 4 : undefined} />;
}

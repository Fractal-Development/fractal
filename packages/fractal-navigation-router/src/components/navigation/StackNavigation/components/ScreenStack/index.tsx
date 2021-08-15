import React, { ReactNode } from 'react';
import { Layer, LayerProps } from '@bma98/fractal-ui';

export interface ScreenStackProps extends LayerProps {
    children?: ReactNode;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    return <Layer {...props} />;
}

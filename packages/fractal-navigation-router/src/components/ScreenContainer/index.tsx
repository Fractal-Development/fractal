import { Layer, LayerProps } from '@bma98/fractal-ui';
import React, { ReactElement } from 'react';

export function ScreenContainer(props: LayerProps): ReactElement {
    return <Layer {...props} />;
}

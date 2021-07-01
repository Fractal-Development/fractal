import React from 'react';
import { Layer } from '../../containers/Layer';
import { LayerProps } from '../../containers/Layer/types';

export function ScrollWrapper(props: LayerProps): JSX.Element {
    return <Layer overflow={'scroll'} flexDirection={'row'} flexWrap={'wrap'} {...props} />;
}

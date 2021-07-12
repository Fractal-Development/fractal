import React from 'react';
import { Layer } from '../../../layout/Layer';
import { LayerProps } from '../../../layout/Layer/types';

export function ScrollWrapper(props: LayerProps): JSX.Element {
    return <Layer overflow={'scroll'} flexDirection={'row'} flexWrap={'wrap'} {...props} />;
}

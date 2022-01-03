import React from 'react';
import { Layer, LayerProps } from '../../../layout';

export function ScrollWrapper(props: LayerProps): JSX.Element {
    return <Layer overflow='scroll' flexDirection='row' flexWrap='wrap' {...props} />;
}

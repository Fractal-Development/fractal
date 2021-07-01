import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

const PaddingLayer = forwardRef((props: LayerProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return <Layer ref={ref} padding={spacings.m} {...props} />;
});

PaddingLayer.displayName = 'PaddingLayer';

export { PaddingLayer };

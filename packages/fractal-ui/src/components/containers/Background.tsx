import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

const Background = forwardRef((props: LayerProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return <Layer ref={ref} backgroundColor={colors.background} flex={1} {...props} />;
});

Background.displayName = 'Background';

export { Background };

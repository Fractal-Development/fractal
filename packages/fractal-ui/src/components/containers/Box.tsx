import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { LayerProps } from './Layer/types';
import { PaddingLayer } from './PaddingLayer';

const Box = forwardRef((props: LayerProps, ref: any): JSX.Element => {
    const { colors, borderRadius, shadows } = useTheme();
    return (
        <PaddingLayer
            ref={ref}
            backgroundColor={colors.foreground}
            borderRadius={borderRadius.m}
            boxShadow={shadows.mainShadow}
            {...props}
        />
    );
});

Box.displayName = 'Box';

export { Box };

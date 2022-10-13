import React, { forwardRef } from 'react';

import { useTheme } from '../../context';
import { ActivityIndicator } from '../feedback/ActivityIndicator';
import { Background } from './Background';
import { LayerProps } from './Layer/types';

const LoadingBackground = forwardRef((props: Omit<LayerProps, 'children'>, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Background ref={ref} justifyContent='center' alignItems='center' {...props}>
            <ActivityIndicator color={colors.mainInteractiveColor} />
        </Background>
    );
});

LoadingBackground.displayName = 'LoadingBackground';

export { LoadingBackground };

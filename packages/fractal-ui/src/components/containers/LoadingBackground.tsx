import React, { forwardRef } from 'react';
import { LayerProps } from './Layer/types';
import { Background } from './Background';
import { ActivityIndicator } from '../ActivityIndicator';
import { useTheme } from '../../context/hooks/useTheme';

const LoadingBackground = forwardRef((props: Omit<LayerProps, 'children'>, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Background ref={ref} {...props}>
            <ActivityIndicator color={colors.mainInteractiveColor} />
        </Background>
    );
});

LoadingBackground.displayName = 'LoadingBackground';

export { LoadingBackground };

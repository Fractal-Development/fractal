import React, { forwardRef } from 'react';
import { LayerProps } from './Layer/types';
import { Background } from './Background';
import { ActivityIndicator } from '../feedback';
import { useTheme } from '../../context';

const LoadingBackground = forwardRef((props: Omit<LayerProps, 'children'>, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Background ref={ref} justifyContent={'center'} alignItems={'center'} {...props}>
            <ActivityIndicator color={colors.mainInteractiveColor} />
        </Background>
    );
});

LoadingBackground.displayName = 'LoadingBackground';

export { LoadingBackground };

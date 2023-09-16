import React, { forwardRef } from 'react';

import { useTheme } from '../../context';
import { ActivityIndicator } from '../feedback/ActivityIndicator';
import { Background } from './Background';
import { LayerProps } from './Layer/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoadingBackground = forwardRef(({ className, ...others }: Omit<LayerProps, 'children'>, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Background ref={ref} className='items-center justify-center' {...others}>
            <ActivityIndicator color={colors.mainInteractiveColor} />
        </Background>
    );
});

LoadingBackground.displayName = 'LoadingBackground';

export { LoadingBackground };

import React, { forwardRef } from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { Layer } from '../../layout/Layer';
import { ActivityIndicatorProps } from './types';

const ActivityIndicator = forwardRef(
    ({ color, ...others }: ActivityIndicatorProps, ref: any): JSX.Element => (
        <Layer ref={ref} {...others}>
            <RNActivityIndicator color={color} size='large' />
        </Layer>
    )
);

ActivityIndicator.displayName = 'ActivityIndicator';

export { ActivityIndicator };

import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { ActivityIndicatorProps } from './types';
import { Layer } from '../../layout/Layer';

const StyledRNActivityIndicator = styled(RNActivityIndicator)`
    width: 100%;
    height: 100%;
`;

const ActivityIndicator = forwardRef(
    ({ color, ...others }: ActivityIndicatorProps, ref: any): JSX.Element => (
        <Layer ref={ref} {...others}>
            <StyledRNActivityIndicator color={color} size='large' />
        </Layer>
    )
);

ActivityIndicator.displayName = 'ActivityIndicator';

export { ActivityIndicator };

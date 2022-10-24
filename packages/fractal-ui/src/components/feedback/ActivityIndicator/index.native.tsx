import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { ActivityIndicatorProps } from './types';
import { Layer } from '../../layout/Layer';
import { shouldForwardProp } from '../../../sharedProps';

const StyledRNActivityIndicator = styled(RNActivityIndicator).withConfig({
    shouldForwardProp
})`
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

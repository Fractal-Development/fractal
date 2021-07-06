import React, { forwardRef, FunctionComponent } from 'react';
import styled from 'styled-components/native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    WebAnimationProps
} from '../../../sharedProps';
import { motify } from '@motify/core';
import { SafeAreaView } from 'react-native';
import { LayerProps } from '../Layer/types';

const MotiView = motify(SafeAreaView)();

const StyledSafeAreaLayer = styled(MotiView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as FunctionComponent<WebAnimationProps>;

const SafeAreaLayer = forwardRef(({ style, ...others }: LayerProps, ref: any): JSX.Element => {
    return <StyledSafeAreaLayer ref={ref} {...others} style={[style]} />;
});

SafeAreaLayer.displayName = 'Layer';

export { SafeAreaLayer };

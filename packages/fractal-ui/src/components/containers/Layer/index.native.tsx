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
import { View } from 'react-native';
import { LayerProps } from './types';

const MotiView = motify(View)();

const StyledLayer = styled(MotiView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as FunctionComponent<WebAnimationProps>;

const Layer = forwardRef(({ style, ...others }: LayerProps, ref: any): JSX.Element => {
    return <StyledLayer ref={ref} {...others} />;
});

Layer.displayName = 'Layer';

export { Layer };

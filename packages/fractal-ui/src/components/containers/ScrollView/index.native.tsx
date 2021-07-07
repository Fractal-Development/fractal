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
import { ScrollView as RNScrollView } from 'react-native';
import { ScrollViewProps } from './types';

const MotiScrollView = motify(RNScrollView)();

const StyledScrollView = styled(MotiScrollView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as FunctionComponent<WebAnimationProps>;

const ScrollView = forwardRef(({ style, ...others }: ScrollViewProps, ref: any): JSX.Element => {
    return <StyledScrollView ref={ref} {...others} style={[style]} />;
});

ScrollView.displayName = 'Layer';

export { ScrollView };

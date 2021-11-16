import React, { forwardRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { motify } from '@motify/core';
import styled from 'styled-components/native';
import { KeyboardAvoidingLayerProps } from './types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../../sharedProps';

const MotiView = motify(KeyboardAvoidingView)();

const StyledLayer = styled(MotiView)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

const KeyboardAvoidingLayer = forwardRef((props: KeyboardAvoidingLayerProps): JSX.Element => <StyledLayer {...props} />);

KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';

export { KeyboardAvoidingLayer };

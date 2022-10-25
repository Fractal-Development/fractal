import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

import { FractalSharedCss } from '../../../sharedProps';
import { KeyboardAvoidingLayerProps } from './types';

const MotiView = motify(KeyboardAvoidingView)();

const StyledLayer = styled(MotiView)`
    ${FractalSharedCss};
`;

const KeyboardAvoidingLayer = forwardRef(
    (props: KeyboardAvoidingLayerProps, ref): JSX.Element => (
        <StyledLayer behavior={Platform.OS === 'ios' ? 'padding' : 'height'} {...props} ref={ref} />
    )
);

KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';

export { KeyboardAvoidingLayer };

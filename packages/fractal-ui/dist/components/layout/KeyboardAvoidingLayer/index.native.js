import React, { forwardRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { motify } from '@motify/core';
import styled from 'styled-components/native';
import { FractalSharedCss } from '../../../sharedProps';
const MotiView = motify(KeyboardAvoidingView)();
const StyledLayer = styled(MotiView) `
    ${FractalSharedCss};
`;
const KeyboardAvoidingLayer = forwardRef((props, ref) => (React.createElement(StyledLayer, Object.assign({ behavior: Platform.OS === 'ios' ? 'padding' : 'height' }, props, { ref: ref }))));
KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';
export { KeyboardAvoidingLayer };
//# sourceMappingURL=index.native.js.map
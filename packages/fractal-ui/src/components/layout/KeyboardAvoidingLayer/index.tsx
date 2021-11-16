import React, { forwardRef, ReactElement } from 'react';
import { Layer } from '../Layer';
import { KeyboardAvoidingLayerProps } from './types';

const KeyboardAvoidingLayer = forwardRef(({ children }: KeyboardAvoidingLayerProps): ReactElement => <Layer>{children}</Layer>);

KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';

export { KeyboardAvoidingLayer };

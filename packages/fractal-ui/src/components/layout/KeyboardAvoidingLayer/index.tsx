import React, { forwardRef, ReactElement } from 'react';
import { Layer } from '../Layer';
import { KeyboardAvoidingLayerProps } from './types';

const KeyboardAvoidingLayer = forwardRef((props: KeyboardAvoidingLayerProps, ref): ReactElement => <Layer {...props} ref={ref} />);

KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';

export { KeyboardAvoidingLayer };

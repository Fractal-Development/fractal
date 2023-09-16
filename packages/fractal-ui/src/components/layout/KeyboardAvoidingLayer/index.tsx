import React, { forwardRef, ReactElement } from 'react';

import { Layer } from '../Layer';
import { KeyboardAvoidingLayerProps } from './types';

const KeyboardAvoidingLayer = forwardRef((props: KeyboardAvoidingLayerProps, ref: any): ReactElement => <Layer ref={ref} {...props} />);

KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';

export { KeyboardAvoidingLayer };

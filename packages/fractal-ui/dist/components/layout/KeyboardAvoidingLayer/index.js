import React, { forwardRef } from 'react';
import { Layer } from '../Layer';
const KeyboardAvoidingLayer = forwardRef((props, ref) => React.createElement(Layer, Object.assign({}, props, { ref: ref })));
KeyboardAvoidingLayer.displayName = 'KeyboardAvoidingLayer';
export { KeyboardAvoidingLayer };
//# sourceMappingURL=index.js.map
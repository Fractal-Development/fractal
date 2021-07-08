import React, { forwardRef } from 'react';
import { Layer } from '../Layer';
const SafeAreaLayer = forwardRef((props, ref) => {
    return React.createElement(Layer, Object.assign({ ref: ref }, props));
});
SafeAreaLayer.displayName = 'SafeAreaLayer';
export { SafeAreaLayer };
//# sourceMappingURL=index.js.map
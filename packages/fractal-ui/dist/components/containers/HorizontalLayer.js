import React, { forwardRef } from 'react';
import { Layer } from './Layer';
const HorizontalLayer = forwardRef((props, ref) => {
    return React.createElement(Layer, Object.assign({ ref: ref, flexDirection: 'row' }, props));
});
HorizontalLayer.displayName = 'HorizontalLayer';
export { HorizontalLayer };
//# sourceMappingURL=HorizontalLayer.js.map
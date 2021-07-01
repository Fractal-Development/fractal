import React from 'react';
import { Layer } from '../../containers/Layer';
export function ScrollWrapper(props) {
    return React.createElement(Layer, Object.assign({ overflow: 'scroll', flexDirection: 'row', flexWrap: 'wrap' }, props));
}
//# sourceMappingURL=index.js.map
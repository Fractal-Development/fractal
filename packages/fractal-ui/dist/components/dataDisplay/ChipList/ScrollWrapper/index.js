import React from 'react';
import { Layer } from '../../../layout';
export function ScrollWrapper(props) {
    return React.createElement(Layer, Object.assign({ overflow: 'scroll', flexDirection: 'row', flexWrap: 'wrap' }, props));
}
//# sourceMappingURL=index.js.map
import React from 'react';
import { Layer } from '../Layer';
export function ScrollView(props) {
    const { horizontal } = props;
    return (React.createElement(Layer, Object.assign({ overflowX: horizontal ? 'scroll' : 'hidden', overflowY: horizontal ? 'hidden' : 'scroll', flexDirection: horizontal ? 'row' : 'column' }, props)));
}
//# sourceMappingURL=index.js.map
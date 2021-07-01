import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
const ScrollableLayer = styled(Layer) `
    overflow-x: ${(props) => (props.horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${(props) => (props.horizontal ? 'hidden' : 'scroll')};
`;
export function ScrollView(props) {
    return React.createElement(ScrollableLayer, Object.assign({}, props));
}
//# sourceMappingURL=index.js.map
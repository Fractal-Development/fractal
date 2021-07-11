import React from 'react';
import styled from 'styled-components';
import { Layer } from '../Layer';
const StyledScrollView = styled(Layer) `
    overflow-x: ${(props) => (props.horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${(props) => (props.horizontal ? 'hidden' : 'scroll')};
`;
export function ScrollView(props) {
    return React.createElement(StyledScrollView, Object.assign({ flexDirection: props.horizontal ? 'row' : 'column' }, props));
}
//# sourceMappingURL=index.js.map
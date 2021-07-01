import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { extractGridItemProps } from './types';
import { getGridRowAccessibilityProps } from './accessibility/getGridRowAccessibilityProps';
const StyledGrid = styled(Layer) `
    ${extractGridItemProps};
`;
const GridRow = forwardRef((props, ref) => {
    return React.createElement(StyledGrid, Object.assign({ ref: ref, flexDirection: 'row' }, props, getGridRowAccessibilityProps()));
});
GridRow.displayName = 'GridRow';
export { GridRow };
//# sourceMappingURL=GridRow.js.map
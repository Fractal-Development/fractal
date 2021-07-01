import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { extractGridItemProps } from './types';
import { getGridColumnAccessibilityProps } from './accessibility/getGridColumnAccessibilityProps';
const StyledGrid = styled(Layer) `
    ${extractGridItemProps};
`;
const GridColumn = forwardRef((props, ref) => {
    return React.createElement(StyledGrid, Object.assign({ ref: ref, flexDirection: 'column' }, props, getGridColumnAccessibilityProps()));
});
GridColumn.displayName = 'GridColumn';
export { GridColumn };
//# sourceMappingURL=GridColumn.js.map
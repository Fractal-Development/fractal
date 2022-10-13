import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Layer } from '../Layer';
import { getGridColumnAccessibilityProps } from './accessibility/getGridColumnAccessibilityProps';
import { GridItemProps, extractGridItemProps } from './types';

const StyledGrid = styled(Layer)`
    ${extractGridItemProps};
`;

const GridColumn = forwardRef(
    (props: GridItemProps, ref: any): JSX.Element => (
        <StyledGrid ref={ref} flexDirection='column' {...props} {...getGridColumnAccessibilityProps()} />
    )
);

GridColumn.displayName = 'GridColumn';

export { GridColumn };

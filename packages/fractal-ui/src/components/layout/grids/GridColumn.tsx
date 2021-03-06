import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Layer } from '../Layer';
import { GridItemProps, extractGridItemProps } from './types';
import { getGridColumnAccessibilityProps } from './accessibility/getGridColumnAccessibilityProps';

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

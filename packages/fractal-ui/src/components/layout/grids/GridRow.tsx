import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Layer } from '../Layer';
import { GridItemProps, extractGridItemProps } from './types';
import { getGridRowAccessibilityProps } from './accessibility/getGridRowAccessibilityProps';

const StyledGrid = styled(Layer)`
    ${extractGridItemProps};
`;

const GridRow = forwardRef(
    (props: GridItemProps, ref: any): JSX.Element => (
        <StyledGrid ref={ref} flexDirection='row' {...props} {...getGridRowAccessibilityProps()} />
    )
);

GridRow.displayName = 'GridRow';

export { GridRow };

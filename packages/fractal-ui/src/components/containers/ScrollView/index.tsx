import React from 'react';
import styled from 'styled-components';
import { Layer } from '../Layer';
import { ScrollViewProps } from './types';

const StyledScrollView = styled(Layer)`
    overflow-x: ${(props: ScrollViewProps) => (props.horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${(props: ScrollViewProps) => (props.horizontal ? 'hidden' : 'scroll')};
`;

export function ScrollView(props: ScrollViewProps): JSX.Element {
    return <StyledScrollView {...props} />;
}

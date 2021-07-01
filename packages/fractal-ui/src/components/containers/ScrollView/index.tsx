import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
import { ScrollViewProps } from './types';

const ScrollableLayer = styled(Layer)`
    overflow-x: ${(props: ScrollViewProps) => (props.horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${(props: ScrollViewProps) => (props.horizontal ? 'hidden' : 'scroll')};
`;

export function ScrollView(props: ScrollViewProps): JSX.Element {
    return <ScrollableLayer {...props} />;
}

import React from 'react';
import styled from 'styled-components';

import { Layer } from '../Layer';
import { ScrollViewProps } from './types';

const StyledScrollView = styled(Layer)`
    overflow-x: ${(props: ScrollViewProps) => (props.horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${(props: ScrollViewProps) => (props.horizontal ? 'hidden' : 'scroll')};
    scrollbar-width: ${(props: ScrollViewProps) => (props.showsHorizontalScrollIndicator ? 'thin' : 'none')};
    ::-webkit-scrollbar {
        background-color: transparent;
        border-radius: 0;
        width: 8px;
        height: ${(props: ScrollViewProps) => (props.showsHorizontalScrollIndicator ? 8 : 0)}px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
        border-radius: 4px;
    }
    :hover::-webkit-scrollbar-thumb {
        background-color: rgba(195, 195, 195, 0.361);
    }
`;

export function ScrollView({
    horizontal,
    showsHorizontalScrollIndicator = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nestedScrollEnabled,
    ...others
}: ScrollViewProps): JSX.Element {
    return (
        <StyledScrollView
            horizontal={horizontal}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            flexDirection={horizontal ? 'row' : 'column'}
            {...others}
        />
    );
}

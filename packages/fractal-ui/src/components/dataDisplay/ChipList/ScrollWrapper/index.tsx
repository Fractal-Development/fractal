import React from 'react';
import styled from 'styled-components';

import { Layer, LayerProps } from '../../../layout';

const StyledScrollView = styled(Layer)`
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
        border-radius: 4px;
    }
    :hover::-webkit-scrollbar-thumb {
        background-color: rgba(195, 195, 195, 0.361);
    }
`;

export function ScrollWrapper(props: LayerProps): JSX.Element {
    return <StyledScrollView overflow='scroll' flexDirection='row' flexWrap='wrap' {...props} />;
}

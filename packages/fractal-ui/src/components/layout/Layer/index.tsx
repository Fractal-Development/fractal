import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { FractalSharedCss, shouldForwardProp } from '../../../sharedProps';
import { LayerProps } from './types';

const StyledLayer = styled(motion.div as any).withConfig({
    shouldForwardProp
})`
    ${FractalSharedCss}
    &:focus {
        outline-color: initial;
        outline-style: none;
        outline-width: initial;
    }
`;

const Layer = forwardRef(
    (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { from, currentVariant, animate, transition = { type: 'spring' }, children, onLayout: _onLayout, ...others }: LayerProps,
        ref: any
    ): JSX.Element => (
        <StyledLayer
            ref={ref}
            flexDirection='column'
            initial={currentVariant ? 'from' : from}
            animate={currentVariant ?? animate}
            transition={transition}
            {...others}
        >
            {children}
        </StyledLayer>
    )
);

Layer.displayName = 'Layer';

export { Layer };

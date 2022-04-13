import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LayerProps } from './types';
import { SharedStyles } from '../../../sharedProps/SharedStyles';

const StyledLayer = styled(motion.div as any).withConfig({
    // shouldForwardProp: isValidMotionProp
})`
    ${SharedStyles};
    &:focus {
        outline-color: initial;
        outline-style: none;
        outline-width: initial;
    }
`;

const Layer = forwardRef(
    ({ from, currentVariant, animate, transition = { type: 'spring' }, children, ...others }: LayerProps, ref: any): JSX.Element => (
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

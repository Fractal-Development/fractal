import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextProps } from './types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractTextProps,
    extractWebProps
} from '../../../sharedProps';

const StyledText = styled(motion.span as any)`
    user-select: ${({ selectable }: TextProps) => (selectable ? 'auto' : 'none')};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
    ${extractTextProps};
`;

const BaseText = forwardRef(
    (
        {
            from,
            currentVariant,
            animate,
            whiteSpace = 'pre-wrap',
            wordWrap = 'break-word',
            display = null,
            ...others
        }: Omit<TextProps, 'variant'>,
        ref: any
    ): JSX.Element => (
        <StyledText
            ref={ref}
            initial={currentVariant ? 'from' : from}
            animate={currentVariant ?? animate}
            display={display}
            whiteSpace={whiteSpace}
            wordWrap={wordWrap}
            {...others}
        />
    )
);

BaseText.displayName = 'BaseText';

export { BaseText };

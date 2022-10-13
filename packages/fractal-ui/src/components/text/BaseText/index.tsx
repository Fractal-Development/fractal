import { motion } from 'framer-motion';
import React, { forwardRef, useCallback } from 'react';
import styled from 'styled-components';

import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractTextProps,
    extractWebProps,
    shouldForwardProp
} from '../../../sharedProps';
import { TextProps } from './types';

const StyledText = styled(motion.span as any).withConfig({
    shouldForwardProp
})`
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
            onPress,
            cursor,
            ...others
        }: Omit<TextProps, 'variant'>,
        ref: any
    ): JSX.Element => {
        const handleClick = useCallback(
            (e) => {
                if (onPress != null) {
                    e.stopPropagation();
                    onPress(e);
                }
            },
            [onPress]
        );
        return (
            <StyledText
                ref={ref}
                onClick={handleClick}
                initial={currentVariant ? 'from' : from}
                animate={currentVariant ?? animate}
                display={display}
                whiteSpace={whiteSpace}
                wordWrap={wordWrap}
                cursor={onPress && !cursor ? 'pointer' : cursor}
                {...others}
            />
        );
    }
);

BaseText.displayName = 'BaseText';

export { BaseText };

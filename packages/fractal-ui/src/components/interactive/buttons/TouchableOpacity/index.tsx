import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps
} from '../../../../sharedProps';
import { TouchableOpacityProps } from './types';
import { useLongPress } from '../hooks/useLongPress';
import { getButtonAccessibilityProps } from '../accessibility/getButtonAccessibilityProps';

const StyledTouchableOpacity = styled(motion.div as any)`
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
` as typeof motion.button;

const transition = { type: 'linear', duration: 0.2 };

const TouchableOpacity = forwardRef(
    (
        { from, currentVariant, animate, onPress, onLongPress, whileTap, disabled, ...others }: TouchableOpacityProps,
        ref: any
    ): JSX.Element => {
        const [pressed, setPressed] = useState(false);

        const tapStyles = {
            opacity: 0.4,
            ...whileTap
        };

        const longPressEvent = useLongPress(onLongPress);

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

        return (
            <StyledTouchableOpacity
                ref={ref}
                transition={transition}
                whileTap={tapStyles}
                flexDirection="column"
                onClick={handleButtonPress}
                initial={currentVariant ? 'from' : from}
                animate={currentVariant ?? animate}
                pointerEvents={disabled ? 'none' : undefined}
                {...longPressEvent}
                {...getButtonAccessibilityProps(pressed)}
                {...others}
            />
        );
    }
);

TouchableOpacity.displayName = 'TouchableOpacity';

export { TouchableOpacity };

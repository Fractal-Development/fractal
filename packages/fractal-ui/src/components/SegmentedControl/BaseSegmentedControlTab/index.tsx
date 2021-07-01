import React from 'react';
import { Text } from '../../text';
import { BaseSegmentedControlTabProps } from '../types';
import { useTheme } from '../../../context/hooks/useTheme';
import styled from 'styled-components';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { getSegmentedControlButtonAccessibilityProps } from '../accessibility/getSegmentedControlButtonAccessibilityProps';

const Button = styled.button`
    position: relative;
    ${extractDimensionProps};
    line-height: 1;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
        cursor: pointer;
    }
`;

interface TabProps {
    noDivider: boolean;
}

const Tap = styled(motion.li)`
    position: relative;
    margin-bottom: 0;
    line-height: 1;
    width: 100%;
    ${(props: TabProps) =>
        props.noDivider
            ? `&:after {
        opacity: 0;
    }`
            : `&:after {
        position: absolute;
        top: 25%;
        right: -0.5px;
        display: block;
        width: 1px;
        height: 50%;
        background-color: gray;
        transition: opacity 200ms ease-out;
        content: '';
    }`}
    &:last-of-type:after {
        display: none;
    }
`;

const Slider = styled(motion.div as any)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    justify-content: center;
    align-items: center;
    ${extractBackgroundProps}
    ${extractShadowProps}
    ${extractBorderProps}
`;

export function BaseSegmentedControlTab({
    onSelect,
    selected,
    value,
    hideDivider,
    fontFamily,
    fontSize,
    color,
    fontWeight,
    fontStyle,
    tintColor
}: BaseSegmentedControlTabProps): JSX.Element {
    const { borderRadius, colors, shadows } = useTheme();

    return (
        <Tap noDivider={hideDivider ?? selected} whileTap={selected ? { scale: 0.95 } : { opacity: 0.6 }}>
            <Button
                margin={0}
                width={'100%'}
                height={'100%'}
                type='button'
                onClick={onSelect}
                {...getSegmentedControlButtonAccessibilityProps(selected)}
            >
                {selected && (
                    <Slider
                        layoutId='SegmentedControlActive'
                        backgroundColor={tintColor ?? colors.foreground}
                        boxShadow={shadows.mainShadow}
                        borderRadius={borderRadius.s}
                    />
                )}
                <Text
                    variant={'normal'}
                    position={'relative'}
                    zIndex={2}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    color={color}
                    fontWeight={fontWeight}
                    fontStyle={fontStyle}
                >
                    {value}
                </Text>
            </Button>
        </Tap>
    );
}

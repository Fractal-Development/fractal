import React, { forwardRef } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { BaseSegmentedControlProps } from '../types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps
} from '../../../sharedProps';
import { useTheme } from '../../../context/hooks/useTheme';
import { SegmentedControlTab } from '../SegmentControlTap';

const Container = styled(motion.ol as any)`
    list-style: none;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

const BaseSegmentedControl = forwardRef(
    (
        {
            selectedIndex,
            values,
            tintColor,
            backgroundColor,
            textStyle,
            activeTextStyle,
            onTabPress,
            ...layerProps
        }: BaseSegmentedControlProps,
        ref: any
    ): JSX.Element => {
        const { colors, borderRadius, sizes } = useTheme();

        return (
            <AnimateSharedLayout>
                <Container
                    ref={ref}
                    tabIndex={0}
                    margin={0}
                    padding={2}
                    width={'100%'}
                    backgroundColor={backgroundColor ?? colors.background}
                    height={sizes.segmentedControlSize}
                    borderRadius={borderRadius.s}
                    display={'inline-flex'}
                    flexDirection={'row'}
                    {...layerProps}
                >
                    {values.map((item, index) => {
                        return (
                            <SegmentedControlTab
                                selected={selectedIndex === index}
                                hideDivider={
                                    backgroundColor != undefined ||
                                    tintColor != undefined ||
                                    selectedIndex === index ||
                                    index === selectedIndex - 1
                                }
                                key={index}
                                value={item}
                                tintColor={tintColor}
                                textStyle={textStyle}
                                activeTextStyle={activeTextStyle}
                                onSelect={() => {
                                    onTabPress(index);
                                }}
                            />
                        );
                    })}
                </Container>
            </AnimateSharedLayout>
        );
    }
);

BaseSegmentedControl.displayName = 'BaseSegmentedControl';

export { BaseSegmentedControl };

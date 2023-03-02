import { motion, LayoutGroup } from 'framer-motion';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { useTheme } from '../../../../context';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps,
    shouldForwardProp
} from '../../../../sharedProps';
import { SegmentedControlTab } from '../SegmentControlTap';
import { BaseSegmentedControlProps } from '../types';

const Container = styled(motion.ol as any).withConfig({
    shouldForwardProp
})`
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
            <LayoutGroup>
                <Container
                    ref={ref}
                    tabIndex={0}
                    margin={0}
                    padding={2}
                    width='100%'
                    backgroundColor={backgroundColor ?? colors.background}
                    height={sizes.segmentedControlSize}
                    borderRadius={borderRadius.s}
                    display='inline-flex'
                    flexDirection='row'
                    {...layerProps}
                >
                    {values.map((item, index) => (
                        <SegmentedControlTab
                            selected={selectedIndex === index}
                            hideDivider={
                                backgroundColor !== undefined ||
                                tintColor !== undefined ||
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
                    ))}
                </Container>
            </LayoutGroup>
        );
    }
);

BaseSegmentedControl.displayName = 'BaseSegmentedControl';

export { BaseSegmentedControl };

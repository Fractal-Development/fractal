import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { motify } from '@motify/core';
import { TextProps } from './types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractTextProps
} from '../../../sharedProps';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';

const MotiText = motify(Text)();

const StyledText = styled(MotiText)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractTextProps};
`;

const BaseText = forwardRef(({ currentVariant, variants, textOverflow, ...others }: TextProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledText ellipsizeMode={textOverflow != null ? 'tail' : undefined} ref={ref} state={variantState} {...others} />;
});

BaseText.displayName = 'BaseText';

export { BaseText };

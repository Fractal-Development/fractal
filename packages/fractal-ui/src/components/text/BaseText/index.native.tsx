import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { TextProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { Text } from 'react-native';
import { motify } from '@motify/core';
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

const BaseText = forwardRef(({ currentVariant, variants, ...others }: TextProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    return <StyledText ref={ref} state={variantState} {...others} />;
});

BaseText.displayName = 'BaseText';

export { BaseText };

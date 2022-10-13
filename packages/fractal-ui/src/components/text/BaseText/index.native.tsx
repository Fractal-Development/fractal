import { motify } from 'moti';
import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { useVariantState } from '../../../animations/native/hooks/useVariantState';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractTextProps
} from '../../../sharedProps';
import { TextProps } from './types';

const MotiText = motify(Text)();

const StyledText = styled(MotiText as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractTextProps};
`;

function deleteIncompatibleProperties(object: Partial<TextProps>) {
    delete object.wordWrap;
}

const BaseText = forwardRef(({ currentVariant, variants, textOverflow, ...others }: TextProps, ref: any): JSX.Element => {
    const variantState = useVariantState(currentVariant, variants);
    deleteIncompatibleProperties(others);
    return <StyledText ellipsizeMode={textOverflow != null ? 'tail' : undefined} ref={ref} state={variantState} {...others} />;
});

BaseText.displayName = 'BaseText';

export { BaseText };

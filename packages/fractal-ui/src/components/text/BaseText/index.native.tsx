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

const StyledText = styled(Text)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractTextProps};
` as typeof Text;

const BaseText = forwardRef((props: TextProps, ref: any): JSX.Element => {
    return <StyledText ref={ref} {...props} />;
});

BaseText.displayName = 'BaseText';

export { BaseText };

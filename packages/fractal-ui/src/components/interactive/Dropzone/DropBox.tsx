import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { LoadIcon } from '../../../assets/LoadIcon';
import { useTheme } from '../../../context/hooks/useTheme';
import { shouldForwardProp } from '../../../sharedProps/shouldForwardProp';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { Layer } from '../../layout/Layer';
import { DropBoxProps } from './types';

const FileInput = styled.input`
    display: none;
`;

const StyledText = styled(motion.span).withConfig({
    shouldForwardProp
})`
    ${extractTextProps};
`;

const StyledButton = styled(motion.button)`
    position: relative;
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    ${extractTextProps};
    &:hover {
        text-decoration: underline;
    }
`;

export function DropBox({
    dropContainerProps,
    dragFocused,
    fileInputProps,
    onButtonPress,
    textButton = 'explorar',
    text = 'Suelta los archivos para adjuntarlos o '
}: DropBoxProps): JSX.Element {
    const { sizes, colors, spacings, textVariants, borderRadius } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants.normal;
    const finalColor = colors[color];

    const variants = {
        from: {
            scale: 1,
            borderColor: colors.placeholder,
            backgroundColor: 'transparent'
        },
        focus: {
            scale: 1.02,
            borderColor: colors.mainInteractiveColor,
            backgroundColor: colors.background
        }
    };

    return (
        <Layer
            position='relative'
            minHeight={sizes.interactiveItemHeight}
            padding={spacings.xs}
            borderStyle='dashed'
            borderRadius={borderRadius.m}
            borderWidth={1}
            justifyContent='center'
            alignItems='center'
            flexDirection='row'
            variants={variants}
            currentVariant={dragFocused ? 'focus' : 'from'}
        >
            <Layer position='absolute' top={0} bottom={0} left={0} right={0} overflow='hidden' {...dropContainerProps} />
            <FileInput {...fileInputProps} />
            <LoadIcon width={24} height={24} fill={colors.text} />
            <Layer width={spacings.xs} />
            <StyledText
                tabIndex={0}
                selectable={false}
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                color={finalColor}
            >
                {text}
                <StyledButton onClick={onButtonPress} color={colors.mainInteractiveColor}>
                    {textButton}
                </StyledButton>
            </StyledText>
        </Layer>
    );
}

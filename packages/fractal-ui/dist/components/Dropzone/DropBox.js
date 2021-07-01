import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { UploadIcon } from '../../assets/UploadIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { extractTextProps } from '../../sharedProps/TextProps';
import { Layer } from '../containers/Layer';
const FileInput = styled.input `
    display: none;
`;
const StyledText = styled(motion.span) `
    ${extractTextProps};
`;
const StyledButton = styled(motion.button) `
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
export function DropBox({ dropContainerProps, dragFocused, fileInputProps, onButtonPress, textButton = 'explorar', text = 'Suelta los archivos para adjuntarlos o ' }) {
    const { sizes, colors, spacings, textVariants, borderRadius } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants.normal;
    const finalColor = colors[color];
    const variants = {
        normal: {
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
    return (React.createElement(Layer, { position: 'relative', minHeight: sizes.interactiveItemHeight, padding: spacings.xs, borderStyle: 'dashed', borderRadius: borderRadius.m, borderWidth: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', variants: variants, animate: dragFocused ? 'focus' : 'normal' },
        React.createElement(Layer, Object.assign({ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }, dropContainerProps)),
        React.createElement(FileInput, Object.assign({}, fileInputProps)),
        React.createElement(UploadIcon, { width: 24, height: 24, fill: colors.text }),
        React.createElement(Layer, { width: spacings.xs }),
        React.createElement(StyledText, { tabIndex: 0, selectable: false, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, color: finalColor },
            text,
            React.createElement(StyledButton, { onClick: onButtonPress, color: colors.mainInteractiveColor }, textButton))));
}
//# sourceMappingURL=DropBox.js.map
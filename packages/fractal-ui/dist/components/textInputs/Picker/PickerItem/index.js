import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps } from '../../../../sharedProps/TextProps';
const StyledOption = styled(motion.option) `
    ${extractTextProps};
`;
export function PickerItem({ color, label, value }) {
    return (React.createElement(StyledOption, { color: color, value: value, label: label }, label));
}
//# sourceMappingURL=index.js.map
import { background, color, flexbox, layout, position, space, typography, border } from 'styled-system';
import { css } from 'styled-components';
import { isValidMotionProp } from 'framer-motion';
export const SharedStyles = css `
    ${space};
    ${layout};
    ${position};
    ${color};
    ${background};
    ${flexbox};
    ${typography};
    ${border};
`;
export function shouldForwardProp(key) {
    if (key === 'children')
        return true;
    return isValidMotionProp(key);
}
//# sourceMappingURL=SharedStyles.js.map
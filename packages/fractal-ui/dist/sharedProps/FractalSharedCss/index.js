import { css } from 'styled-components';
import { extractBackgroundProps } from '../BackgroundProps';
import { extractBorderProps } from '../BorderProps';
import { extractDimensionProps } from '../DimensionProps';
import { extractDisplayProps } from '../DisplayProps';
import { extractShadowProps } from '../ShadowProps';
import { extractWebProps } from '../WebProps';
const createCss = css;
export const FractalSharedCss = createCss `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;
//# sourceMappingURL=index.js.map
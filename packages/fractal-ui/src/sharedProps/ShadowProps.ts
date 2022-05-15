import { FractalSharedStyleProps } from './FractalSharedStyleProps';

export function extractShadowProps({ boxShadow }: FractalSharedStyleProps): string {
    return `
        ${boxShadow != null ? `box-shadow: ${boxShadow}` : ''};
    `;
}

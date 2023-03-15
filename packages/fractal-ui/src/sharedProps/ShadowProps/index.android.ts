import { FractalSharedStyleProps } from '../FractalSharedStyleProps';

export function extractShadowProps({ elevation }: FractalSharedStyleProps): string {
    return `
        ${elevation != null ? `elevation: ${elevation};` : ''};
    `;
}

import { FractalSharedStyleProps } from './FractalSharedStyleProps';

export function extractBackgroundProps({ backgroundColor }: FractalSharedStyleProps): string {
    return `
        background-color: ${backgroundColor ?? 'transparent'};
    `;
}

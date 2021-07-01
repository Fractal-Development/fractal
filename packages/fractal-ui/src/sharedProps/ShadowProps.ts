export interface ShadowProps {
    boxShadow?: string;
}

export function extractShadowProps({ boxShadow }: ShadowProps): string {
    return `
        ${boxShadow != null ? `box-shadow: ${boxShadow}` : ''};
    `;
}

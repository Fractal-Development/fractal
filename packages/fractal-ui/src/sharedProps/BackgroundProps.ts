export interface BackgroundProps {
    backgroundColor?: string;
}

export function extractBackgroundProps({ backgroundColor }: BackgroundProps): string {
    return `
        background-color: ${backgroundColor ?? 'transparent'};
    `;
}

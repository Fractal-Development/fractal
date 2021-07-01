export interface BackgroundProps {
    backgroundColor?: string;
    bg?: string;
}

export function extractBackgroundProps({ backgroundColor, bg }: BackgroundProps): string {
    return `
        background-color: ${bg ?? 'transparent'};
        background-color: ${backgroundColor ?? 'transparent'};
    `;
}

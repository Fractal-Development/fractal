export interface PlaceholderProps {
    placeholderTextColor?: string;
}

export function extractPlaceholder({ placeholderTextColor }: PlaceholderProps): string {
    return `
        ::placeholder {
            color: ${placeholderTextColor ?? 'black'}
        }
    `;
}

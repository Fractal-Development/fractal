export function getDisplayProperty(display?: string | null): string {
    return display === null ? '' : `display: ${display ?? 'flex'}`;
}

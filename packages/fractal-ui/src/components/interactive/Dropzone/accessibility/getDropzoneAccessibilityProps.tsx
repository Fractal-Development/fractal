export function getDropzoneAccessibilityProps(): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': 'Dropzone'
    };
}

export function getAudioPlayerAccessibilityProps(): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': 'Audio Player'
    };
}

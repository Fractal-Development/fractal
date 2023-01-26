import { SizeType } from '../../types';

export function getWebTabletSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'extraLargeTablet' && value) {
        // Show a bigger iPad UI for the biggest one
        return SizeType.extraLarge;
    } else if (key === 'largeTablet' && value) {
        // Show the ideal iPad UI
        return SizeType.large;
    } else if (key === 'compactTablet' && value) {
        // Show a slightly reduced interface
        return SizeType.medium;
    }

    return undefined;
}

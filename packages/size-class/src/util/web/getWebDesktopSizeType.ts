import { SizeType } from '../../types';

export function getWebDesktopSizeType(key: string, value: boolean): SizeType | undefined {
    if (key === 'extraLargeDesktop' && value) {
        return SizeType.extraLarge;
    } else if (key === 'largeDesktop' && value) {
        return SizeType.large;
    } else if (key === 'compactDesktop' && value) {
        return SizeType.medium;
    }

    return undefined;
}

import { SizeType, SizeClass } from '../types';

export function getDesktopSizeType(dimension: number, SizeClass: SizeClass): SizeType {
    if (dimension >= SizeClass.extraLargeDesktop) {
        return SizeType.extraLarge;
    } else if (dimension >= SizeClass.largeDesktop) {
        return SizeType.large;
    } else if (dimension >= SizeClass.compactDesktop) {
        return SizeType.medium;
    } else {
        return SizeType.compact;
    }
}

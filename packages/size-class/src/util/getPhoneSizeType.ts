import { SizeType, SizeClass } from '../types';

export function getPhoneSizeType(dimension: number, SizeClass: SizeClass): SizeType {
    if (dimension >= SizeClass.largePhone) {
        // Landscape, you can show more content
        return SizeType.medium;
    } else {
        // Normal phone interface
        return SizeType.compact;
    }
}

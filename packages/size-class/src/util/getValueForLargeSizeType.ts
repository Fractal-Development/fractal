import { SizeType } from '../types';

export function getValueForLargeSizeType<T>(size: SizeType, largeValue: T, fallback: T): T {
    if (size === SizeType.large || size === SizeType.extraLarge) {
        return largeValue;
    } else {
        return fallback;
    }
}

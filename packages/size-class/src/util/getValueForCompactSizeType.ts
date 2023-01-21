import { SizeType } from '../types';

export function getValueForCompactSizeType<T>(size: SizeType, compactValue: T, fallback: T): T {
    if (size === SizeType.compact || size === SizeType.medium) {
        return compactValue;
    } else {
        return fallback;
    }
}

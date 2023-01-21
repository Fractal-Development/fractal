import { SizeType } from '../types';

export function getValueForSizeType<T>(size: SizeType, xl: T, lg: T, md: T, sm: T): T {
    switch (size) {
        case SizeType.extraLarge:
            return xl;
        case SizeType.large:
            return lg;
        case SizeType.medium:
            return md;
        case SizeType.compact:
            return sm;
    }
}

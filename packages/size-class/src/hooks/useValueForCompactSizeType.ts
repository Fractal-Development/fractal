import { DimensionType } from '../types';
import { getValueForCompactSizeType } from '../util';
import { useSizeGroup } from './useSizeGroup';

export function useValueForCompactSizeType<T>(dimensionType: DimensionType, compactSizeValue: T, fallback: T): T {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForCompactSizeType(sizeType, compactSizeValue, fallback);
}

import { DimensionType } from '../types';
import { getValueForLargeSizeType } from '../util';
import { useSizeGroup } from './useSizeGroup';

export function useValueForLargeSizeType<T>(dimensionType: DimensionType, largeSizeValue: T, fallback: T): T {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForLargeSizeType(sizeType, largeSizeValue, fallback);
}

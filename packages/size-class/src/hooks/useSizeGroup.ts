import { DimensionType, HeightSizeClass, WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types';
import { getSizeType } from '../util/getSizeType';

export function useSizeGroup(dimensionType: DimensionType): SizeGroup {
    const deviceType = useDeviceType();
    const sizeValue = useSizeValue(dimensionType);
    const sizeType = getSizeType(deviceType, sizeValue, dimensionType === 'width' ? WidthSizeClass : HeightSizeClass);
    return [sizeType, deviceType, sizeValue];
}

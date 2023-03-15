import { DeviceType, SizeClass, SizeType } from '../types';
import { getDesktopSizeType } from './getDesktopSizeType';
import { getTabletSizeType } from './getTabletSizeType';
import { getPhoneSizeType } from './getPhoneSizeType';

export function getSizeType(type: DeviceType, dimension: number, SizeClass: SizeClass): SizeType {
    if (type === DeviceType.DESKTOP) {
        return getDesktopSizeType(dimension, SizeClass);
    } else if (type === DeviceType.TABLET) {
        return getTabletSizeType(dimension, SizeClass);
    } else {
        return getPhoneSizeType(dimension, SizeClass);
    }
}

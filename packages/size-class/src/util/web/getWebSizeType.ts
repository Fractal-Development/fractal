import { DeviceType, SizeType } from '../../types';
import { getWebDesktopSizeType } from './getWebDesktopSizeType';
import { getWebPhoneSizeType } from './getWebPhoneSizeType';
import { getWebTabletSizeType } from './getWebTabletSizeType';

export function getWebSizeType(type: DeviceType, key: string, value: boolean): SizeType | undefined {
    if (type === DeviceType.DESKTOP) {
        return getWebDesktopSizeType(key, value);
    } else if (type === DeviceType.TABLET) {
        return getWebTabletSizeType(key, value);
    } else {
        return getWebPhoneSizeType(key, value);
    }
}

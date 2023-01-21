import { DeviceType } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';

export function useDeviceType(): DeviceType {
    const [type, setType] = useState<DeviceType>(getDefaultDeviceType());

    useLayoutEffect(() => {
        setType(getDefaultDeviceType());
    }, []);

    return type;
}

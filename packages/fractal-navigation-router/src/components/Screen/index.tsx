import { Layer } from '@bma98/fractal-ui';
import React, { ReactElement } from 'react';
import { ScreenProps } from './types/ScreenProps';

export function Screen({ active, activityState, ...others }: ScreenProps): ReactElement | null {
    return <Layer display={activityState > 0 && active > 0 ? 'flex' : 'none'} {...others} />;
}

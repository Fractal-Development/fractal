import React, { forwardRef } from 'react';
import { Video as ExpoVideo, VideoProps as ExpoVideoProps } from 'expo-av';
import { VideoProps } from './types';

const ExpoVideoComponent = ExpoVideo as unknown as React.FC<ExpoVideoProps>;

const Video = forwardRef(
    ({ source, ...others }: VideoProps, ref: any): JSX.Element => (
        <ExpoVideoComponent ref={ref} source={typeof source === 'string' ? { uri: source } : source} {...others} />
    )
);

Video.displayName = 'Video';

export { Video };

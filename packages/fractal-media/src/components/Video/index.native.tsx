import React, { forwardRef } from 'react';
import { Video as ExpoVideo } from 'expo-av';
import { VideoProps } from './types';

const Video = forwardRef(({ source, ...others }: VideoProps, ref: any): JSX.Element => {
    return <ExpoVideo ref={ref} source={typeof source === 'string' ? { uri: source } : source} {...others} />;
});

Video.displayName = 'Video';

export { Video };

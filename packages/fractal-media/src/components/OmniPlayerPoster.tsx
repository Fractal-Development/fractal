import React, { useCallback, useEffect, useState } from 'react';
import { LayerProps } from '@fractal-software/fractal-ui';
import { MATCH_URL_YOUTUBE } from '../patterns';
import { MediaPlayerPoster } from './MediaPlayerPoster';
import { getVideoID } from './YouTubeVideoPlayer/utils/getVideoID';
import { getThumbnailAsync } from '../utils/getThumbnailAsync';

export interface OmniPlayerPosterProps extends Omit<LayerProps, 'children' | 'width' | 'height'> {
    source: number | string;
    width: number;
    height: number;
    onPlayPress?: () => void;
}

export function OmniPlayerPoster({ source, width, height, onPlayPress, ...layerProps }: OmniPlayerPosterProps): JSX.Element {
    const [isYouTubeVideo] = useState<boolean>(typeof source === 'string' && MATCH_URL_YOUTUBE.test(source));
    const [image, setImage] = useState<string | undefined>(undefined);
    const videoID: string = isYouTubeVideo ? getVideoID(source as string) ?? '' : '';
    const youTubeVideoImage = `http://img.youtube.com/vi/${videoID}/0.jpg`;

    const generateThumbnail = useCallback(async () => {
        try {
            if (typeof source === 'string') {
                const { uri } = await getThumbnailAsync(source, {
                    time: 10000
                });
                setImage(uri);
            }
        } catch (error) {
            console.log(error);
        }
    }, [source]);

    useEffect(() => {
        if (!isYouTubeVideo && !image) {
            (async () => await generateThumbnail())();
        }
    }, [generateThumbnail, image, isYouTubeVideo]);

    return (
        <MediaPlayerPoster
            width={width}
            height={height}
            source={isYouTubeVideo ? youTubeVideoImage : image}
            onPlayPress={onPlayPress}
            {...layerProps}
        />
    );
}

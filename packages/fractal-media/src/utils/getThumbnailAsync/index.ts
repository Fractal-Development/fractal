export type VideoThumbnailsOptions = {
    /**
     * The time position where the image will be retrieved in ms.
     */
    time?: number;
};

export type VideoThumbnailsResult = {
    /**
     * URI to the created image (usable as the source for an Image/Video element).
     */
    uri: string;
};

export const getThumbnailAsync = (sourceFilename: string, options: VideoThumbnailsOptions = {}): Promise<VideoThumbnailsResult> => {
    const { time } = options;
    const videoTimeInSeconds = time != null && time > 0 ? time / 1000 : 0;
    return new Promise((resolve) => {
        const video = document.createElement('video');
        video.crossOrigin = '*';
        const timeupdate = function () {
            if (snapImage()) {
                video.removeEventListener('timeupdate', timeupdate);
                video.pause();
                video.remove();
            }
        };
        video.addEventListener('loadeddata', function () {
            if (snapImage()) {
                video.removeEventListener('timeupdate', timeupdate);
            }
        });
        const snapImage = function () {
            // eslint-disable-next-line prefer-const
            let canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // eslint-disable-next-line prefer-const
            let context = canvas.getContext('2d');
            context?.drawImage(video, 0, 0, canvas.width, canvas.height);
            const image = canvas.toDataURL();
            const success = image.length > 100000;
            if (success) {
                canvas.remove();
                resolve({ uri: image });
            }
            return success;
        };
        video.addEventListener('timeupdate', timeupdate);
        video.preload = 'metadata';
        video.src = sourceFilename;
        // Load video in Safari / IE11
        video.muted = true;
        video.playsInline = true;
        video.currentTime = videoTimeInSeconds;
        video.play();
    });
};

import React from 'react';
import YoutubeIframePlayer from 'react-native-youtube-iframe';
export function IframePlayer({ videoID, height, width, onReady }) {
    return (React.createElement(YoutubeIframePlayer, { forceAndroidAutoplay: true, play: true, videoId: videoID, height: height, width: width, onReady: onReady }));
}
//# sourceMappingURL=index.native.js.map
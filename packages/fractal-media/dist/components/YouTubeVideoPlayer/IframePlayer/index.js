import React from 'react';
import styled from 'styled-components';
const StyledIframe = styled.iframe `
    border: none;
    appearance: none;
    width: 100%;
    height: 100%;
`;
export function IframePlayer({ videoID, onReady }) {
    return (React.createElement(StyledIframe, { src: `https://www.youtube.com/embed/${videoID}?autoplay=1`, frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true, onLoad: onReady }));
}
//# sourceMappingURL=index.js.map
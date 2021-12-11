import React from 'react';
import { Box, Text, useTheme } from '@bma98/fractal-ui';
import { MediaContentRow } from '@bma98/fractal-media';
export function MediaContentRowExample() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title', marginBottom: spacings.m }, "Media Content Row Example"),
        React.createElement(Box, { marginBottom: spacings.m },
            React.createElement(MediaContentRow, { title: 'Rubber Robot', subtitle: 'Podington Bear', imageSource: 'https://picsum.photos/id/382/300', addSeparator: true, padding: spacings.s }),
            React.createElement(MediaContentRow, { title: 'Rubber Robot', subtitle: 'Podington Bear', imageSource: 'https://picsum.photos/id/382/300', showOptionsButton: true, addSeparator: true, padding: spacings.s }),
            React.createElement(MediaContentRow, { title: 'Rubber Robot', subtitle: 'Podington Bear', imageSource: 'https://picsum.photos/id/382/300', enableLoveButton: true, addSeparator: true, padding: spacings.s }),
            React.createElement(MediaContentRow, { title: 'Rubber Robot', subtitle: 'Podington Bear', imageSource: 'https://picsum.photos/id/382/300', enableLoveButton: true, isLoved: true, padding: spacings.s }))));
}
//# sourceMappingURL=MediaContentRowExample.js.map
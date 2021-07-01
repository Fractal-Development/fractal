import React from 'react';
import { useTheme, Layer, SocialMediaButtons, Text } from '@bma98/fractal-ui';
export function SocialMediaButtonsFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Social Media Buttons"),
        React.createElement(Layer, { marginTop: spacings.s, alignItems: 'center' },
            React.createElement(SocialMediaButtons, { width: '100%', marginTop: spacings.s, marginBottom: spacings.xl, onGooglePress: () => console.log('Google button pressed'), onFacebookPress: () => console.log('Facebook button pressed'), onApplePress: () => console.log('Apple button pressed') }),
            React.createElement(Text, { variant: 'normal', alignItems: 'center' }, "Social Media Buttons without Apple button"),
            React.createElement(SocialMediaButtons, { width: '100%', removeAppleButton: true, marginTop: spacings.s, marginBottom: spacings.xl, onGooglePress: () => console.log('Google button pressed'), onFacebookPress: () => console.log('Facebook button pressed'), onApplePress: () => console.log('Apple button pressed') }))));
}
//# sourceMappingURL=SocialMediaButtonsFragment.js.map
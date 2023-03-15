import React from 'react';
import { useTheme, Layer, SocialMediaButtons, Text } from '@fractal/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Social Media Buttons Fragment
            </Text>
            <Layer alignItems='center' marginTop={spacings.s} marginBottom={spacings.xl}>
                <SocialMediaButtons
                    width='100%'
                    marginTop={spacings.s}
                    marginBottom={spacings.xl}
                    onGooglePress={() => console.log('Google button pressed')}
                    onFacebookPress={() => console.log('Facebook button pressed')}
                    onApplePress={() => console.log('Apple button pressed')}
                />
                <Text variant='normal' alignItems='center' {...getTitleTextAccessibilityProps(2)}>
                    Social Media Buttons without Apple button
                </Text>
                <SocialMediaButtons
                    width='100%'
                    removeAppleButton
                    marginTop={spacings.s}
                    marginBottom={spacings.xl}
                    onGooglePress={() => console.log('Google button pressed')}
                    onFacebookPress={() => console.log('Facebook button pressed')}
                    onApplePress={() => console.log('Apple button pressed')}
                />
            </Layer>
        </>
    );
}

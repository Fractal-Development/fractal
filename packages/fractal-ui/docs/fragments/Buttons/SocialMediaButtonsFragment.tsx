import React from 'react';
import { useTheme, Layer, SocialMediaButtons, Text } from '../../../src';

export function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Social Media Buttons</Text>
            <Layer alignItems={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <SocialMediaButtons
                    width={'100%'}
                    marginTop={spacings.s}
                    marginBottom={spacings.xl}
                    onGooglePress={() => console.log('Google button pressed')}
                    onFacebookPress={() => console.log('Facebook button pressed')}
                    onApplePress={() => console.log('Apple button pressed')}
                />
                <Text variant={'normal'} alignItems={'center'}>
                    Social Media Buttons without Apple button
                </Text>
                <SocialMediaButtons
                    width={'100%'}
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

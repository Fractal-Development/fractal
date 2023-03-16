import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import { AvatarFragment, ColorPickerFragment, ImageBackgroundFragment, ImageFragment } from '../../../fragments/ui-fragments/media';

export function ContentMediaFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <AvatarFragment />
                    <ColorPickerFragment />
                    <ImageBackgroundFragment />
                    <ImageFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}

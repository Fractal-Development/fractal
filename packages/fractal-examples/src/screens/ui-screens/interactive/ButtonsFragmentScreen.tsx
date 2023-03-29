import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal-software/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal-software/fractal-ui';
import {
    ButtonFragment,
    CircularIconButtonFragment,
    CrossButtonFragment,
    OptionsButtonFragment,
    OptionsMenuButtonFragment,
    RoundedToggleButtonFragment,
    SocialMediaButtonsFragment,
    TextButtonFragment,
    ToggleButtonFragment
} from '../../../fragments/ui-fragments';

export function ButtonsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <ButtonFragment />
                    <CircularIconButtonFragment />
                    <CrossButtonFragment />
                    <OptionsButtonFragment />
                    <OptionsMenuButtonFragment />
                    <RoundedToggleButtonFragment />
                    <SocialMediaButtonsFragment />
                    <TextButtonFragment />
                    <ToggleButtonFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}

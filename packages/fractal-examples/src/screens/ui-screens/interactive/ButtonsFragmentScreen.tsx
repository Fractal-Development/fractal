import React from 'react';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
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

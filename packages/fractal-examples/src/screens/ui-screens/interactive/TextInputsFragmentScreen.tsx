import React from 'react';
import { PaddingLayer, ScrollView } from '@fractal/fractal-ui';
import { NavigationBarInsetsLayer } from '@fractal/fractal-navigation';
import {
    DatePickerFragment,
    IconTextFieldFragment,
    MessageInputFragment,
    PickerFragment,
    SearchBarFragment,
    TagsInputFieldFragment,
    TextFieldFragment,
    TextFieldMaskFragment,
    TimePickerFragment
} from '../../../fragments/ui-fragments/interactive';

export function TextInputsFragmentScreen() {
    return (
        <NavigationBarInsetsLayer>
            <ScrollView flex={1}>
                <PaddingLayer>
                    <DatePickerFragment />
                    <IconTextFieldFragment />
                    <MessageInputFragment />
                    <PickerFragment />
                    <SearchBarFragment />
                    <TagsInputFieldFragment />
                    <TextFieldFragment />
                    <TextFieldMaskFragment />
                    <TimePickerFragment />
                </PaddingLayer>
            </ScrollView>
        </NavigationBarInsetsLayer>
    );
}

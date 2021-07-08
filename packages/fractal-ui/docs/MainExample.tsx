import React from 'react';
import { FractalAppRoot, Background, ScrollView, PaddingLayer, SafeAreaLayer } from '../src';
import {
    ThemeSwapper,
    DropZoneFragment,
    ChipFragment,
    TagsInputField,
    ActivityIndicatorFragment,
    AvatarImageFragment,
    ImageBackgroundFragment,
    SegmentedControlFragment,
    SliderFragment,
    SwitchFragment,
    CheckBoxFragment,
    RadioFragment,
    TextsFragment,
    CrossButtonFragment,
    OptionsMenuButtonFragment,
    OptionsButtonFragment,
    TextButtonFragment,
    ButtonFragment,
    ToggleButtonFragment,
    RoundedToggleButtonFragment,
    CircularIconButtonFragment,
    ColorPickerFragment,
    LayerFragment,
    LayerAnimatedFragment,
    BoxContentFragment,
    SeparatorsFragment,
    SearchBarFragment,
    AutocompleteFragment,
    TextFieldFragment,
    TextFieldMaskFragment,
    IconTextFieldFragment,
    PickerFragment,
    DatePickerFragment,
    TimePickerFragment,
    BlurredModalFragment,
    MiddleCellModalFragment,
    BottomCellModalFragment,
    ErrorMessageFragment,
    PopoverFragment,
    DetailsListFragment,
    GridListFragment,
    GridFragment,
    SocialMediaButtonsFragment,
    RecyclerTable,
    LoadingBackgroundFragment
} from './fragments';

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <RadioFragment />
            <LayerAnimatedFragment />
        </PaddingLayer>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <SafeAreaLayer>
                    <ScrollView>
                        <Content />
                    </ScrollView>
                </SafeAreaLayer>
            </Background>
        </FractalAppRoot>
    );
}

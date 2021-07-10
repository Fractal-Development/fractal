import React from 'react';
import { FractalAppRoot, Background, ScrollView, PaddingLayer, SafeAreaLayer } from '@bma98/fractal-ui';
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
    FlatListFragment,
    RecyclerViewFragment
} from './fragments';
import { ChartsExamples } from './charts/ChartsExamples';

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <ThemeSwapper />
            <DropZoneFragment />
            <ChipFragment />
            <TagsInputField />
            <ActivityIndicatorFragment />
            <AvatarImageFragment />
            <ImageBackgroundFragment />
            <SegmentedControlFragment />
            <SliderFragment />
            <SwitchFragment />
            <CheckBoxFragment />
            <RadioFragment />
            <TextsFragment />
            <LayerFragment />
            <BoxContentFragment />
            <SeparatorsFragment />
            <CrossButtonFragment />
            <OptionsMenuButtonFragment />
            <OptionsButtonFragment />
            <TextButtonFragment />
            <ButtonFragment />
            <ToggleButtonFragment />
            <RoundedToggleButtonFragment />
            <CircularIconButtonFragment />
            <ColorPickerFragment />
            <SearchBarFragment />
            <AutocompleteFragment />
            <TextFieldFragment />
            <TextFieldMaskFragment />
            <IconTextFieldFragment />
            <PickerFragment />
            <DatePickerFragment />
            <TimePickerFragment />
            <BlurredModalFragment />
            <MiddleCellModalFragment />
            <BottomCellModalFragment />
            <ErrorMessageFragment />
            <PopoverFragment />
            <DetailsListFragment />
            <GridListFragment />
            <GridFragment />
            <SocialMediaButtonsFragment />
            <RecyclerViewFragment />
            <FlatListFragment />
            <ChartsExamples />
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

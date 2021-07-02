import React from 'react';
import { FractalAppRoot, useTheme, Background, ScrollView, PaddingLayer, Box } from '@bma98/fractal-ui';
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
    TextButtonFragment,
    ButtonFragment,
    ToggleButtonFragment,
    RoundedToggleButtonFragment,
    CircularIconButtonFragment,
    ColorPickerFragment,
    LayerAnimatedFragment,
    BoxContentFragment,
    SeparatorsFragment,
    SearchBarFragment,
    AutocompleteFragment,
    MessageInputFragment,
    TextFieldFragment,
    TextFieldMaskFragment,
    IconTextFieldFragment,
    PickerFragment,
    DatePickerFragment,
    TimePickerFragment,
    BlurredModalFragment,
    MiddleCellModalFragment,
    ErrorMessageFragment,
    PopoverFragment,
    DetailsListFragment,
    GridListFragment,
    GridFragment,
    SocialMediaButtonsFragment,
    RecyclerTable
} from './fragments';

function SwapThemeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ThemeSwapper />
        </Box>
    );
}

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <SwapThemeFragment />
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
            <LayerAnimatedFragment />
            <BoxContentFragment />
            <SeparatorsFragment />
            <CrossButtonFragment />
            <TextButtonFragment />
            <ButtonFragment />
            <ToggleButtonFragment />
            <RoundedToggleButtonFragment />
            <CircularIconButtonFragment />
            <ColorPickerFragment />
            <SearchBarFragment />
            <AutocompleteFragment />
            <MessageInputFragment />
            <TextFieldFragment />
            <TextFieldMaskFragment />
            <IconTextFieldFragment />
            <PickerFragment />
            <DatePickerFragment />
            <TimePickerFragment />
            <BlurredModalFragment />
            <MiddleCellModalFragment />
            <ErrorMessageFragment />
            <PopoverFragment />
            <DetailsListFragment />
            <GridListFragment />
            <GridFragment />
            <SocialMediaButtonsFragment />
            <RecyclerTable />
        </PaddingLayer>
    );
}

export function MainExample(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <ScrollView>
                    <Content />
                </ScrollView>
            </Background>
        </FractalAppRoot>
    );
}

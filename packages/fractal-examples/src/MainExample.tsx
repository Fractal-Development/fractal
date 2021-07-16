import React, { Fragment } from 'react';
import { FractalAppRoot, Background, ScrollView, PaddingLayer, SafeAreaLayer } from '@bma98/fractal-ui';
import {
    ThemeSwapperFragment,
    DropZoneFragment,
    ChipFragment,
    ChipListFragment,
    ColorTabListFragment,
    TagsInputFieldFragment,
    ActivityIndicatorFragment,
    AvatarFragment,
    ImageFragment,
    ImageBackgroundFragment,
    SegmentedControlFragment,
    SliderFragment,
    SwitchFragment,
    CheckBoxFragment,
    RadioButtonFragment,
    RadioGroupFragment,
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
    HorizontalLayerFragment,
    MarginLayerFragment,
    PaddingLayerFragment,
    BoxContentFragment,
    SeparatorFragment,
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
    DimmedModalFragment,
    BottomCellModalFragment,
    ErrorMessageFragment,
    BadgeFragment,
    MessageFragment,
    PopoverFragment,
    TableContainerFragment,
    GridListFragment,
    GridFragment,
    SocialMediaButtonsFragment,
    VerticalFlatListFragment,
    HorizontalFlatListFragment,
    RecyclerViewFragment
} from './ui-fragments';
import { ChartsExamples } from './charts-fragments';
import { MediaExamples } from './media-fragments';
import { ChatContentExample } from './messaging-fragments';

function Content(): JSX.Element {
    return (
        <Fragment>
            <PaddingLayer>
                <ThemeSwapperFragment />
                <DropZoneFragment />
                <ChipFragment />
                <ChipListFragment />
                <ColorTabListFragment />
                <TagsInputFieldFragment />
                <ActivityIndicatorFragment />
                <AvatarFragment />
                <ImageFragment />
                <ImageBackgroundFragment />
                <SegmentedControlFragment />
                <SliderFragment />
                <SwitchFragment />
                <CheckBoxFragment />
                <RadioButtonFragment />
                <RadioGroupFragment />
                <TextsFragment />
                <HorizontalLayerFragment />
                <MarginLayerFragment />
                <PaddingLayerFragment />
                <BoxContentFragment />
                <SeparatorFragment />
                <CrossButtonFragment />
                <OptionsButtonFragment />
                <OptionsMenuButtonFragment />
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
                <DimmedModalFragment />
                <BottomCellModalFragment />
                <ErrorMessageFragment />
                <BadgeFragment />
                <MessageFragment />
                <PopoverFragment />
                <TableContainerFragment />
                <GridListFragment />
                <GridFragment />
                <SocialMediaButtonsFragment />
                <RecyclerViewFragment />
                <VerticalFlatListFragment />
                <HorizontalFlatListFragment />
                <ChartsExamples />
                <MediaExamples />
            </PaddingLayer>
            <ChatContentExample />
        </Fragment>
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

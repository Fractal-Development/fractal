import React from 'react';
import { FractalAppRoot, useTheme, Background, ScrollView, PaddingLayer, Box } from '@bma98/fractal-ui';
import { ThemeSwapper, DropZoneFragment, ChipFragment, TagsInputField, ActivityIndicatorFragment, AvatarImageFragment, ImageBackgroundFragment, SegmentedControlFragment, SliderFragment, SwitchFragment, CheckBoxFragment, RadioFragment, TextsFragment, CrossButtonFragment, TextButtonFragment, ButtonFragment, ToggleButtonFragment, RoundedToggleButtonFragment, CircularIconButtonFragment, ColorPickerFragment, LayerAnimatedFragment, BoxContentFragment, SeparatorsFragment, SearchBarFragment, AutocompleteFragment, MessageInputFragment, TextFieldFragment, TextFieldMaskFragment, IconTextFieldFragment, PickerFragment, DatePickerFragment, TimePickerFragment, BlurredModalFragment, MiddleCellModalFragment, ErrorMessageFragment, PopoverFragment, DetailsListFragment, GridListFragment, GridFragment, SocialMediaButtonsFragment, RecyclerTable } from './fragments';
function SwapThemeFragment() {
    const { spacings } = useTheme();
    return (React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
        React.createElement(ThemeSwapper, null)));
}
function Content() {
    return (React.createElement(PaddingLayer, null,
        React.createElement(SwapThemeFragment, null),
        React.createElement(DropZoneFragment, null),
        React.createElement(ChipFragment, null),
        React.createElement(TagsInputField, null),
        React.createElement(ActivityIndicatorFragment, null),
        React.createElement(AvatarImageFragment, null),
        React.createElement(ImageBackgroundFragment, null),
        React.createElement(SegmentedControlFragment, null),
        React.createElement(SliderFragment, null),
        React.createElement(SwitchFragment, null),
        React.createElement(CheckBoxFragment, null),
        React.createElement(RadioFragment, null),
        React.createElement(TextsFragment, null),
        React.createElement(LayerAnimatedFragment, null),
        React.createElement(BoxContentFragment, null),
        React.createElement(SeparatorsFragment, null),
        React.createElement(CrossButtonFragment, null),
        React.createElement(TextButtonFragment, null),
        React.createElement(ButtonFragment, null),
        React.createElement(ToggleButtonFragment, null),
        React.createElement(RoundedToggleButtonFragment, null),
        React.createElement(CircularIconButtonFragment, null),
        React.createElement(ColorPickerFragment, null),
        React.createElement(SearchBarFragment, null),
        React.createElement(AutocompleteFragment, null),
        React.createElement(MessageInputFragment, null),
        React.createElement(TextFieldFragment, null),
        React.createElement(TextFieldMaskFragment, null),
        React.createElement(IconTextFieldFragment, null),
        React.createElement(PickerFragment, null),
        React.createElement(DatePickerFragment, null),
        React.createElement(TimePickerFragment, null),
        React.createElement(BlurredModalFragment, null),
        React.createElement(MiddleCellModalFragment, null),
        React.createElement(ErrorMessageFragment, null),
        React.createElement(PopoverFragment, null),
        React.createElement(DetailsListFragment, null),
        React.createElement(GridListFragment, null),
        React.createElement(GridFragment, null),
        React.createElement(SocialMediaButtonsFragment, null),
        React.createElement(RecyclerTable, null)));
}
export function MainExample() {
    return (React.createElement(FractalAppRoot, { handleThemeManually: true },
        React.createElement(Background, null,
            React.createElement(ScrollView, null,
                React.createElement(Content, null)))));
}
//# sourceMappingURL=MainExample.js.map
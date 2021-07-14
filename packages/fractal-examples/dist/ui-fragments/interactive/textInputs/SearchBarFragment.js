import React, { useState } from 'react';
import { useTheme, Box, HorizontalLayer, Popover, SearchBar, Button, Text, CircularIconButton, LoadIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
function PopoverContent() {
    const { spacings } = useTheme();
    return (React.createElement(Box, { marginTop: spacings.m },
        React.createElement(Button, { variant: 'alternative', text: 'Pasion' })));
}
export function SearchBarFragment() {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Search Bar Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(SearchBar, { placeholder: 'Search Bar', buttonVariant: 'main', onChangeText: (text) => console.log(`New text ${text}`), onSearch: (query) => console.log('Query: ', query), marginBottom: spacings.m }),
            React.createElement(SearchBar, { enableSearchButton: true, placeholder: 'Search Bar with button', buttonVariant: 'main', onChangeText: (text) => console.log(`New text ${text}`), onSearch: (query) => console.log('Query: ', query), marginBottom: spacings.m }),
            React.createElement(HorizontalLayer, null,
                React.createElement(SearchBar, { enableSearchButton: true, placeholder: 'Search Bar with button and other component', buttonVariant: 'main', flex: 1, onChangeText: (text) => console.log(`New text ${text}`), onSearch: (query) => console.log('Query: ', query) }),
                React.createElement(Popover, { active: active, onRequestClose: toggleActive, popoverChildren: () => React.createElement(PopoverContent, null) }, (ref) => (React.createElement(CircularIconButton, { ref: ref, onPress: toggleActive, variant: 'success', marginLeft: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color }))))))));
}
//# sourceMappingURL=SearchBarFragment.js.map
import React, { useState } from 'react';
import { useTheme, Box, Button, Text, Popover } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
function PopoverContent(props) {
    return (React.createElement(Box, Object.assign({}, props),
        React.createElement(Button, { variant: 'alternative', text: 'Pasion' })));
}
export function PopoverFragment() {
    const { spacings } = useTheme();
    const [isTopPopoverVisible, setTopPopoverVisible] = useState(false);
    const toggleTopPopover = () => setTopPopoverVisible((current) => !current);
    const [isRightPopoverVisible, setRightPopoverVisible] = useState(false);
    const toggleRightPopover = () => setRightPopoverVisible((current) => !current);
    const [isBottomPopoverVisible, setBottomPopoverVisible] = useState(false);
    const toggleBottomPopover = () => setBottomPopoverVisible((current) => !current);
    const [isLeftPopoverVisible, setLeftPopoverVisible] = useState(false);
    const toggleLeftPopover = () => setLeftPopoverVisible((current) => !current);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "PopoverView Example"),
        React.createElement(Box, { marginTop: spacings.m, alignItems: 'center' },
            React.createElement(Popover, { placement: 'bottom', active: isBottomPopoverVisible, onRequestClose: toggleBottomPopover, popoverChildren: () => React.createElement(PopoverContent, { marginTop: spacings.m }) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 220, onPress: toggleBottomPopover, text: 'Bottom' }))),
        React.createElement(Box, { marginTop: spacings.m, alignItems: 'center' },
            React.createElement(Popover, { placement: 'top', active: isTopPopoverVisible, onRequestClose: toggleTopPopover, popoverChildren: () => React.createElement(PopoverContent, { marginBottom: spacings.m }) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 220, onPress: toggleTopPopover, text: 'Top' }))),
        React.createElement(Box, { marginTop: spacings.m },
            React.createElement(Popover, { placement: 'right', active: isRightPopoverVisible, onRequestClose: toggleRightPopover, popoverChildren: () => React.createElement(PopoverContent, { marginLeft: spacings.m }) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 120, onPress: toggleRightPopover, text: 'Right' }))),
        React.createElement(Box, { marginTop: spacings.m, marginBottom: spacings.m, alignItems: 'flex-end' },
            React.createElement(Popover, { placement: 'left', active: isLeftPopoverVisible, onRequestClose: toggleLeftPopover, popoverChildren: () => React.createElement(PopoverContent, { marginRight: spacings.m }) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 120, onPress: toggleLeftPopover, text: 'Left' })))));
}
//# sourceMappingURL=PopoverFragment.js.map
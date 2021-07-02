import React, { Fragment, useState } from 'react';
import { useTheme, Box, Button, Text, Popover } from '@bma98/fractal-ui';
function PopoverContent() {
    return (React.createElement(Box, { width: 120 },
        React.createElement(Button, { variant: 'alternative', text: 'Pasion' })));
}
export function PopoverFragment() {
    const { spacings } = useTheme();
    const [popoversVisibles, setPopoversVisibles] = useState({
        top: false,
        bottom: false,
        right: false,
        left: false
    });
    const showPopover = (popover) => {
        if (popover === 'top') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { top: true });
            });
        }
        if (popover === 'bottom') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { bottom: true });
            });
        }
        if (popover === 'right') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { right: true });
            });
        }
        if (popover === 'left') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { left: true });
            });
        }
    };
    const hidePopover = (popover) => {
        if (popover === 'top') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { top: false });
            });
        }
        if (popover === 'bottom') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { bottom: false });
            });
        }
        if (popover === 'right') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { right: false });
            });
        }
        if (popover === 'left') {
            setPopoversVisibles((currentValue) => {
                return Object.assign(Object.assign({}, currentValue), { left: false });
            });
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement(Text, { variant: 'title' }, "PopoverView Example"),
        React.createElement(Box, { marginTop: spacings.m, alignItems: 'center' },
            React.createElement(Popover, { placement: 'bottom', active: popoversVisibles.bottom, onRequestClose: () => hidePopover('bottom'), popoverChildren: () => React.createElement(PopoverContent, null) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 220, onPress: () => showPopover('bottom'), text: 'Bottom' }))),
        React.createElement(Box, { marginTop: spacings.m, alignItems: 'center' },
            React.createElement(Popover, { placement: 'top', active: popoversVisibles.top, onRequestClose: () => hidePopover('top'), popoverChildren: () => React.createElement(PopoverContent, null) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 220, onPress: () => showPopover('top'), text: 'Top' }))),
        React.createElement(Box, { marginTop: spacings.m },
            React.createElement(Popover, { placement: 'right', active: popoversVisibles.right, onRequestClose: () => hidePopover('right'), popoverChildren: () => React.createElement(PopoverContent, null) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 120, onPress: () => showPopover('right'), text: 'Right' }))),
        React.createElement(Box, { marginTop: spacings.m, marginBottom: spacings.m, alignItems: 'flex-end' },
            React.createElement(Popover, { placement: 'left', active: popoversVisibles.left, onRequestClose: () => hidePopover('left'), popoverChildren: () => React.createElement(PopoverContent, null) }, (ref) => React.createElement(Button, { ref: ref, variant: 'main', width: 120, onPress: () => showPopover('left'), text: 'Left' })))));
}
//# sourceMappingURL=PopoverFragment.js.map
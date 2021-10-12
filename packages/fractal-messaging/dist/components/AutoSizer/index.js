import React from 'react';
import VirtualizedAutoSizer from 'react-virtualized-auto-sizer';
export function AutoSizer({ children, onResize }) {
    return React.createElement(VirtualizedAutoSizer, { onResize: onResize }, children);
}
//# sourceMappingURL=index.js.map
import React, { memo } from 'react';
const ThreeDotsIcon = memo((props) => {
    return (React.createElement("svg", Object.assign({ focusable: false, viewBox: '0 0 18 4' }, props),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("circle", { cx: 16, cy: 2, r: 2 }),
            React.createElement("circle", { cx: 9, cy: 2, r: 2 }),
            React.createElement("circle", { cx: 2, cy: 2, r: 2 }))));
});
ThreeDotsIcon.displayName = 'ThreeDotsIcon';
export { ThreeDotsIcon };
//# sourceMappingURL=index.js.map
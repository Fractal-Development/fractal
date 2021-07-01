import React, { memo } from 'react';
import Svg, { G, Circle } from 'react-native-svg';
const ThreeDotsIcon = memo((props) => {
    return (React.createElement(Svg, Object.assign({ focusable: false, viewBox: '0 0 18 4' }, props),
        React.createElement(G, { fillRule: 'evenodd' },
            React.createElement(Circle, { cx: 16, cy: 2, r: 2 }),
            React.createElement(Circle, { cx: 9, cy: 2, r: 2 }),
            React.createElement(Circle, { cx: 2, cy: 2, r: 2 }))));
});
ThreeDotsIcon.displayName = 'ThreeDotsIcon';
export { ThreeDotsIcon };
//# sourceMappingURL=index.native.js.map
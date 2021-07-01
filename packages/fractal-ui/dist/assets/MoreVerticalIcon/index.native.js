import React, { memo } from 'react';
import Svg, { Circle } from 'react-native-svg';
const MoreVerticalIcon = memo((props) => {
    return (React.createElement(Svg, Object.assign({ focusable: false, viewBox: '0 0 384 384' }, props),
        React.createElement(Circle, { cx: 192, cy: 42.667, r: 42.667 }),
        React.createElement(Circle, { cx: 192, cy: 192, r: 42.667 }),
        React.createElement(Circle, { cx: 192, cy: 341.333, r: 42.667 })));
});
MoreVerticalIcon.displayName = 'MoreVerticalIcon';
export { MoreVerticalIcon };
//# sourceMappingURL=index.native.js.map
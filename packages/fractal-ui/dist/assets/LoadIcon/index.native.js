import React, { memo } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
const LoadIcon = memo((props) => {
    return (React.createElement(Svg, Object.assign({ width: 28, height: 28, viewBox: '0 0 28 28' }, props),
        React.createElement(Rect, { width: 18, height: 2, rx: 1, transform: 'translate(5 21)' }),
        React.createElement(Rect, { width: 4, height: 2, rx: 1, transform: 'rotate(-90 14 9)' }),
        React.createElement(Rect, { width: 4, height: 2, rx: 1, transform: 'rotate(-90 22 1)' }),
        React.createElement(Path, { d: 'M13.998 3.5a1.167 1.167 0 01.677.21L19.342 7a1.167 1.167 0 11-1.354 1.9l-3.99-2.787L10.032 9.1a1.167 1.167 0 11-1.4-1.867l4.666-3.5a1.167 1.167 0 01.7-.233z' }),
        React.createElement(Path, { d: 'M13.999 5.833A1.167 1.167 0 0115.165 7v9.333a1.167 1.167 0 01-2.333 0V7a1.167 1.167 0 011.167-1.167z' })));
});
LoadIcon.displayName = 'LoadIcon';
export { LoadIcon };
//# sourceMappingURL=index.native.js.map
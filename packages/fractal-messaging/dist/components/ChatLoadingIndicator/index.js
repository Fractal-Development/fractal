import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { loadingCircleTransition, loadingCircleVariants } from './config';
const bulletStyle = {
    backgroundColor: '#999999',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
};
export function ChatLoadingIndicator({ show }) {
    return show ? (React.createElement(Layer, { height: 40, width: 60, justifyContent: 'center' },
        React.createElement(Layer, { backgroundColor: '#ffffff', padding: 8, borderRadius: 20, flexDirection: 'row', from: loadingCircleVariants.start, animate: loadingCircleVariants.end, exit: loadingCircleVariants.start },
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: loadingCircleTransition }),
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: loadingCircleTransition }),
            React.createElement(Layer, { style: bulletStyle, from: loadingCircleVariants.start, animate: loadingCircleVariants.end, transition: loadingCircleTransition })))) : null;
}
//# sourceMappingURL=index.js.map
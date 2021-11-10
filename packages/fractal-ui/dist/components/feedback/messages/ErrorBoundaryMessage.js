var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Layer } from '../../layout';
import { ErrorMessage } from './ErrorMessage';
export class ErrorBoundaryMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }
    componentDidCatch(error, info) {
        const { onError } = this.props;
        if (onError)
            onError(error, info.componentStack);
    }
    render() {
        const { hasError, errorTitle, errorMessage } = this.state;
        const _a = this.props, { onError } = _a, layerProps = __rest(_a, ["onError"]);
        if (hasError) {
            return React.createElement(ErrorMessage, Object.assign({ title: errorTitle, description: errorMessage }, layerProps));
        }
        return React.createElement(Layer, Object.assign({}, layerProps));
    }
}
//# sourceMappingURL=ErrorBoundaryMessage.js.map
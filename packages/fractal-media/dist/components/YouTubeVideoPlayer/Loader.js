import React from 'react';
import { Layer, ActivityIndicator } from '@bma98/fractal-ui';
export function Loader() {
    return (React.createElement(Layer, { position: "absolute", flex: 1, right: 0, left: 0, top: 0, bottom: 0, alignItems: "center", justifyContent: "center" },
        React.createElement(ActivityIndicator, { color: 'white', width: 25, height: 25 })));
}
//# sourceMappingURL=Loader.js.map
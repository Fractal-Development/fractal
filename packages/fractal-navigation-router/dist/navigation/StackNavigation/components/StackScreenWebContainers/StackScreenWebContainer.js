import React from 'react';
import { Background } from '@bma98/fractal-ui';
import { StackNavigationGoBackAnimatedProvider } from '../../context/StackNavigationGoBackAnimatedProvider';
import { useHistory } from '../../../../router';
export function StackScreenWebContainer({ children }) {
    const { goBack } = useHistory();
    return (React.createElement(StackNavigationGoBackAnimatedProvider, { goBackAnimated: goBack },
        React.createElement(Background, null, children)));
}
//# sourceMappingURL=StackScreenWebContainer.js.map
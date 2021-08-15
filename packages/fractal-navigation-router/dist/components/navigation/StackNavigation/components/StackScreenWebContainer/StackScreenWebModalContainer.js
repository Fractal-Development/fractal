import React, { useCallback, useState } from 'react';
import { useHistory } from '../../../../../router';
import { Background, MiddleCellModal } from '@bma98/fractal-ui';
import { StackNavigationGoBackAnimatedProvider } from '../../context/StackNavigationGoBackAnimatedProvider';
export function StackScreenWebModalContainer({ children }) {
    const { goBack } = useHistory();
    const [visible, setVisible] = useState(true);
    const goBackAnimated = useCallback(() => {
        setVisible(false);
    }, [setVisible]);
    return (React.createElement(StackNavigationGoBackAnimatedProvider, { goBackAnimated: goBackAnimated },
        React.createElement(MiddleCellModal, { position: 'relative', visible: visible, onDismiss: goBackAnimated, onExitComplete: goBack },
            React.createElement(Background, null, children))));
}
//# sourceMappingURL=StackScreenWebModalContainer.js.map
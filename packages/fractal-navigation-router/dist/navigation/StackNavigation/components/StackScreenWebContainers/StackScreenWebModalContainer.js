import React from 'react';
import { useHistory } from '../../../../router';
import { Background, MiddleCellModal } from '@bma98/fractal-ui';
export function StackScreenWebModalContainer({ children }) {
    const { goBack } = useHistory();
    return (React.createElement(MiddleCellModal, { position: 'relative', visible: true, onDismiss: goBack },
        React.createElement(Background, null, children)));
}
//# sourceMappingURL=StackScreenWebModalContainer.js.map
import React from 'react';
import { useHistory } from '../../../../router';
import { MiddleCellModal } from '@bma98/fractal-ui';
export function StackScreenWebModalContainer({ children }) {
    const { goBack } = useHistory();
    return (React.createElement(MiddleCellModal, { visible: true, onDismiss: goBack }, children));
}
//# sourceMappingURL=StackScreenWebModalContainer.js.map
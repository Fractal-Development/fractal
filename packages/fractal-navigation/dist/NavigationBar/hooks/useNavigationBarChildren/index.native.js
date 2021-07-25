import React, { useMemo } from 'react';
import { ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';
export function useNavigationBarChildren(children) {
    return useMemo(() => {
        let leftChild = null;
        let centerChild = null;
        let rightChild = null;
        React.Children.forEach(children, (child) => {
            if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderLeftView) {
                leftChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderCenterView) {
                centerChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderRightView) {
                rightChild = child;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
//# sourceMappingURL=index.native.js.map
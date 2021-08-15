import React, { useMemo } from 'react';
import { ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';
import { NavigationBarCenterView, NavigationBarLeftView, NavigationBarRightView } from '../../components/NavigationBar/views';
export function useNavigationBarChildren(children) {
    return useMemo(() => {
        let leftChild = null;
        let centerChild = null;
        let rightChild = null;
        React.Children.forEach(children, (child) => {
            if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderLeftView || (child === null || child === void 0 ? void 0 : child.type) === NavigationBarLeftView) {
                leftChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderCenterView || (child === null || child === void 0 ? void 0 : child.type) === NavigationBarCenterView) {
                centerChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderRightView || (child === null || child === void 0 ? void 0 : child.type) === NavigationBarRightView) {
                rightChild = child;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
//# sourceMappingURL=index.native.js.map
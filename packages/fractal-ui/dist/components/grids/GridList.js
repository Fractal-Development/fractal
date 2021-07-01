import React, { forwardRef, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';
const GridList = forwardRef(function List(props, ref) {
    const { numColumns, renderItem, data } = props;
    const renderWrapper = useCallback((item, index) => {
        return (React.createElement(Layer, { key: `${index}`, width: `${100 / numColumns}%` }, renderItem(item, index)));
    }, [numColumns, renderItem]);
    return (React.createElement(Layer, Object.assign({ ref: ref, flexWrap: 'wrap', flexDirection: 'row' }, props, getGridListAccessibilityProps()), data.map(renderWrapper)));
});
GridList.displayName = 'GridList';
export { GridList };
//# sourceMappingURL=GridList.js.map
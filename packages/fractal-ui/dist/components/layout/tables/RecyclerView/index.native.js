import React, { forwardRef } from 'react';
import { RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview';
const RecyclerView = forwardRef((props, ref) => {
    return React.createElement(RecyclerListView, Object.assign({ ref: ref }, props));
});
RecyclerView.displayName = 'RecyclerView';
export { RecyclerView, LayoutProvider, DataProvider };
//# sourceMappingURL=index.native.js.map
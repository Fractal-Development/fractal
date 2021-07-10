import React from 'react';
import { RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview/web';
import AutoSizer from 'react-virtualized-auto-sizer';
function RecyclerView(props) {
    return React.createElement(AutoSizer, null, ({ height, width }) => React.createElement(RecyclerListView, Object.assign({ style: { width, height } }, props)));
}
export { RecyclerView, LayoutProvider, DataProvider };
//# sourceMappingURL=index.js.map
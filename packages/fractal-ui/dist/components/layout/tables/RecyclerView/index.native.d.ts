import { RecyclerListViewProps, LayoutProvider, DataProvider } from 'recyclerlistview';
export interface RecyclerViewProps extends Omit<RecyclerListViewProps, 'style'> {
    style?: any;
}
declare function RecyclerView(props: RecyclerViewProps): JSX.Element;
export { RecyclerView, LayoutProvider, DataProvider };

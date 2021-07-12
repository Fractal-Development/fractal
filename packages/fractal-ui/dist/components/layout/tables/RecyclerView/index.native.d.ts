import { RecyclerListViewProps, LayoutProvider, DataProvider } from 'recyclerlistview';
export interface RecyclerViewProps extends RecyclerListViewProps {
    key: string | number;
}
declare function RecyclerView(props: RecyclerViewProps): JSX.Element;
export { RecyclerView, LayoutProvider, DataProvider };

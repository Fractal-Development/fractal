import { DataProvider } from '@bma98/fractal-ui';
declare const tableDummyData: number[];
declare const horizontalTableDummyData: number[];
declare const rowRenderer: (_: any, __: any, index: number | undefined) => JSX.Element;
declare const dataProvider: DataProvider;
declare function itemHeightCalculator(): number;
export { tableDummyData, horizontalTableDummyData, rowRenderer, dataProvider, itemHeightCalculator };

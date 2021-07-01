import Reanimated from 'react-native-reanimated';
export declare function useSharedValueCallbacks(initialValue: number | string | undefined, finalValue: number | string | undefined): [Reanimated.SharedValue<number | string | undefined>, () => void, () => void];

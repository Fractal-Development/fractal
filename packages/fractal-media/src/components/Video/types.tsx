import { ResizeMode } from '../../types/ResizeMode';

export type VideoProps = {
    source?: number | string;
    useNativeControls?: boolean;
    resizeMode?: ResizeMode;
    shouldPlay?: boolean;
    rate?: number;
    volume?: number;
    isMuted?: boolean;
    isLooping?: boolean;
    style?: any;
};

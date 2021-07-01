export type VideoProps = {
    source?: number | string;
    useNativeControls?: boolean;
    resizeMode?: 'stretch' | 'cover' | 'contain';
    shouldPlay?: boolean;
    rate?: number;
    volume?: number;
    isMuted?: boolean;
    isLooping?: boolean;
    style?: any;
};

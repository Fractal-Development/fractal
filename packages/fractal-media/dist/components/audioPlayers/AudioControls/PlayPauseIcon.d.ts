import React from 'react';
interface PlayPauseIconProps {
    tintColor: string;
    isPlaying: boolean;
}
declare const PlayPauseIcon: React.MemoExoticComponent<({ tintColor, isPlaying }: PlayPauseIconProps) => JSX.Element>;
export { PlayPauseIcon };

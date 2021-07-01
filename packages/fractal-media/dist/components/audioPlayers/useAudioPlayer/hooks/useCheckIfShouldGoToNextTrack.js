var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from 'react';
export function useCheckIfShouldGoToNextTrack(trackIndex, tracksLength, enableRepeatPlayback, toNextTrack, setCurrentTime, setIsPlaying, resetPosition) {
    return useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const isLastIndex = trackIndex == tracksLength - 1;
        if (!isLastIndex || (isLastIndex && enableRepeatPlayback)) {
            toNextTrack();
        }
        else {
            yield resetPosition();
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }), [enableRepeatPlayback, resetPosition, setCurrentTime, setIsPlaying, toNextTrack, trackIndex, tracksLength]);
}
//# sourceMappingURL=useCheckIfShouldGoToNextTrack.js.map
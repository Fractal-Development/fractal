import { useWidthSizeGroup } from '@bma98/size-class';
export function useChatMessageSize() {
    const [sizeType] = useWidthSizeGroup();
    if (sizeType == 'compact') {
        return {
            width: 224,
            height: 126
        };
    }
    return { width: 600, height: 360 };
}
//# sourceMappingURL=useChatMessageSize.js.map
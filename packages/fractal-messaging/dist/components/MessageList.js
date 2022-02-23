var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { LayoutProvider, DataProvider, useTheme, Layer, RecyclerView } from '@bma98/fractal-ui';
import { AutoSizer } from './AutoSizer';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
import { useGetContainerWidth } from '../hooks/useGetContainerWidth/index';
const dataProvider = new DataProvider((rowOne, rowTwo) => rowOne.id !== rowTwo.id);
var MessageViewTypes;
(function (MessageViewTypes) {
    MessageViewTypes[MessageViewTypes["Message"] = 0] = "Message";
    MessageViewTypes[MessageViewTypes["Footer"] = 1] = "Footer";
})(MessageViewTypes || (MessageViewTypes = {}));
function getMaxBubbleWidth(width, paddingHorizontal) {
    return (width - paddingHorizontal * 2) * 0.75;
}
export function MessageList(_a) {
    var _b;
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, footerComponent, rowRenderer, parsePatterns } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor", "footerComponent", "rowRenderer", "parsePatterns"]);
    const messagesWithAccessoryViews = useMemo(() => {
        if (footerComponent) {
            return [...messages, {}];
        }
        return messages;
    }, [messages, footerComponent]);
    const listView = useRef();
    const containerRef = useRef();
    const messagesLength = useRef(0);
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    const [containerWidth, containerLayoutProps] = useGetContainerWidth(containerRef);
    const [maxContentWidth, setMaxContentWidth] = useState(getMaxBubbleWidth(containerWidth, spacings.m) - (spacings.m * 2 + 6));
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight(maxContentWidth);
    const heights = messagesWithAccessoryViews.map(() => undefined);
    const scrollToEnd = useCallback(() => setTimeout(() => {
        if (listView.current && listView.current._initComplete) {
            listView.current.scrollToEnd();
        }
    }), []);
    const messageHeightCalculator = useCallback((message) => {
        let contentHeight = 0;
        if (message.image || message.video) {
            contentHeight = chatMessageHeight;
        }
        else if (message.audio) {
            contentHeight = MESSAGE_AUDIO_HEIGHT;
        }
        else {
            contentHeight = getTextHeight(message.text);
        }
        return contentHeight + spacings.m * 3;
    }, [chatMessageHeight, getTextHeight, spacings.m]);
    const renderChatMessage = useCallback((type, data, index) => {
        switch (type) {
            case MessageViewTypes.Message:
                if (rowRenderer) {
                    return rowRenderer({
                        message: data,
                        index,
                        onFavoritePress,
                        onSharePress,
                        messageActions,
                        getBubbleColor,
                        parsePatterns
                    });
                }
                return (React.createElement(ChatMessage, { message: data, key: data.id, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor, parsePatterns: parsePatterns }));
            default:
                return footerComponent !== null && footerComponent !== void 0 ? footerComponent : React.createElement(React.Fragment, null);
        }
    }, [onFavoritePress, onSharePress, messageActions, getBubbleColor, parsePatterns, footerComponent, rowRenderer]);
    const layoutProvider = useMemo(() => new LayoutProvider((index) => {
        const message = messages[index];
        return message != null ? MessageViewTypes.Message : MessageViewTypes.Footer;
    }, (type, dim, index) => {
        switch (type) {
            case MessageViewTypes.Message:
                let height = heights[index];
                if (height != null) {
                    dim.height = height;
                }
                else {
                    height = messageHeightCalculator(messages[index]);
                    heights[index] = height;
                    dim.height = height;
                }
                break;
            default:
                dim.height = sizes.textFieldHeight;
        }
        dim.width = containerWidth;
    }), [heights, messageHeightCalculator, messages, containerWidth, sizes.textFieldHeight]);
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    }, [messagesWithAccessoryViews, maxContentWidth]);
    useEffect(() => {
        const handlescrollToEnd = () => __awaiter(this, void 0, void 0, function* () {
            yield scrollToEnd();
            messagesLength.current = messages.length;
        });
        if (messagesLength.current !== messages.length) {
            handlescrollToEnd();
        }
    }, [dataProviderState, messages.length, scrollToEnd]);
    useEffect(() => {
        var _a, _b;
        if (((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) != null) {
            setMaxContentWidth(getMaxBubbleWidth((_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth, spacings.m));
        }
    }, [(_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth, spacings.m]);
    return (React.createElement(Layer, Object.assign({ flex: 1, ref: containerRef }, containerLayoutProps, layerProps), messages.length > 0 && (React.createElement(AutoSizer, { onResize: scrollToEnd }, ({ height, width }) => (React.createElement(RecyclerView, { ref: listView, canChangeSize: true, style: { height, width }, key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: renderChatMessage, initialRenderIndex: messagesWithAccessoryViews.length - 1, scrollViewProps: { showsVerticalScrollIndicator: false } }))))));
}
//# sourceMappingURL=MessageList.js.map
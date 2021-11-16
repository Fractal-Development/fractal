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
import React, { useCallback, useState, useMemo, useEffect, useRef, Fragment } from 'react';
import { LayoutProvider, DataProvider, useTheme, Layer, RecyclerView } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { AutoSizer } from './AutoSizer';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne.id !== rowTwo.id;
});
var MessageViewTypes;
(function (MessageViewTypes) {
    MessageViewTypes[MessageViewTypes["Message"] = 0] = "Message";
    MessageViewTypes[MessageViewTypes["Footer"] = 1] = "Footer";
})(MessageViewTypes || (MessageViewTypes = {}));
export function MessageList(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor, footerComponent } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor", "footerComponent"]);
    const messagesWithAccessoryViews = useMemo(() => {
        if (footerComponent) {
            return [...messages, {}];
        }
        else {
            return messages;
        }
    }, [messages, footerComponent]);
    const listView = useRef();
    const { spacings, sizes } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    const width = useSizeValue('width');
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight((width - spacings.m * 2) * 0.75 - (spacings.m * 2 + 6));
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
    const rowRenderer = useCallback((type, data) => {
        switch (type) {
            case MessageViewTypes.Message:
                return (React.createElement(ChatMessage, { message: data, key: data.id, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor }));
            default:
                return footerComponent !== null && footerComponent !== void 0 ? footerComponent : React.createElement(Fragment, null);
        }
    }, [getBubbleColor, messageActions, onFavoritePress, onSharePress, footerComponent]);
    const layoutProvider = useMemo(() => {
        return new LayoutProvider((index) => {
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
            dim.width = width;
        });
    }, [heights, messageHeightCalculator, messages, width, sizes.textFieldHeight]);
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(messagesWithAccessoryViews));
    }, [messagesWithAccessoryViews, width]);
    useEffect(() => {
        scrollToEnd();
    }, [dataProviderState, scrollToEnd]);
    return (React.createElement(Layer, Object.assign({ flex: 1 }, layerProps), messages.length > 0 && (React.createElement(AutoSizer, { onResize: scrollToEnd }, ({ height, width }) => (React.createElement(RecyclerView, { ref: listView, canChangeSize: true, style: { height, width }, key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: rowRenderer, initialRenderIndex: messagesWithAccessoryViews.length - 1, scrollViewProps: { showsVerticalScrollIndicator: false } }))))));
}
//# sourceMappingURL=MessageList.js.map
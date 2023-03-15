import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #__next {
        width: 100%;
        /* To smooth any scrolling behavior */
        -webkit-overflow-scrolling: touch;
        margin: 0px;
        padding: 0px;
        /* Allows content to fill the viewport and go beyond the bottom */
        min-height: 100%;
    }
    #__next {
        flex-shrink: 0;
        flex-basis: auto;
        flex-direction: column;
        flex-grow: 1;
        display: flex;
        flex: 1;
    }

    #root {
        width: 100%;
        /* To smooth any scrolling behavior */
        -webkit-overflow-scrolling: touch;
        margin: 0px;
        padding: 0px;
        /* Allows content to fill the viewport and go beyond the bottom */
        min-height: 100%;
    }
    #root {
        flex-shrink: 0;
        flex-basis: auto;
        flex-direction: column;
        flex-grow: 1;
        display: flex;
        flex: 1;
    }
    html {
        scroll-behavior: smooth;
        /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
        -webkit-text-size-adjust: 100%;
        height: 100%;
    }
    body {
        display: flex;
        /* Allows you to scroll below the viewport; default value is visible */
        overflow-y: auto;
        overscroll-behavior-y: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: scrollbar;
    }

    body {
        margin: 0;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    input::-webkit-search-cancel-button,
    input::-webkit-search-decoration,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
        display: none;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(195, 195, 195, 0.541) rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar {
        background-color: transparent;
        border-radius: 0;
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(195, 195, 195, 0.361);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(195, 195, 195, 0.541);
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;

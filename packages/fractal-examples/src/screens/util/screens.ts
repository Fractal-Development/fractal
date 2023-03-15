export interface Screen {
    name: string;
    path: string;
}

export const screens = {
    chipFragment: {
        name: 'Chip Fragment',
        path: 'chip_fragment_screen'
    },
    chipListFragment: {
        name: 'Chip List Fragment',
        path: 'chip_list_fragment_screen'
    },
    colorTabListFragment: {
        name: 'Color Tab List Fragment',
        path: 'color_tab_list_fragment_screen'
    },
    activityIndicatorFragmentScreen: {
        name: 'Activity Indicator Fragment',
        path: 'activity_indicator_fragmen_screen'
    },
    errorMessageFragmentScreen: {
        name: 'Error Message Fragment Screen',
        path: 'error_message_fragment_screen'
    },
    recyclerViewFragment: {
        name: 'Recycler View Fragment',
        path: 'recycler_view_fragment_screen'
    },
    authScreenFragment: {
        name: 'Authentication Screen Fragment',
        path: 'authentication_screen_fragment_screen'
    },
    chatFragment: {
        name: 'Chat Content Fragment',
        path: 'chat_content_fragment_screen'
    },
    mediaFragment: {
        name: 'Media Fragment',
        path: 'media_fragment_screen'
    },
    listsFragment: {
        name: 'Lists Fragment',
        path: 'lists_fragment_screen'
    },
    autocompleteFragment: {
        name: 'Autocomplete Fragment',
        path: 'autocomplete_fragment_screen'
    },
    chartsFragment: {
        name: 'Charts Fragment',
        path: 'charts_fragment'
    },
    buttons_fragment: {
        name: 'Buttons Fragment',
        path: 'buttons_fragmen'
    },
    radio_button_fragment: {
        name: 'Radio Button Fragment',
        path: 'radio_button_fragment'
    },
    text_inputs_fragment: {
        name: 'Text Inputs Fragment',
        path: 'text_inputs_fragment'
    },
    interactive_fragment: {
        name: 'Interactive Fragment',
        path: 'interactive_fragment'
    },
    layout_fragment: {
        name: 'Layout Fragment',
        path: 'layout_fragment'
    },
    content_media_fragment: {
        name: 'Content Media Fragment',
        path: 'content_media_fragment'
    },
    overlays_fragment: {
        name: 'Overlays Fragment',
        path: 'overlays_fragment'
    },
    texts_fragment: {
        name: 'Texts Fragment',
        path: 'texts_fragment'
    },
    icons_fragment: {
        name: 'Icons Fragment',
        path: 'icons_fragment'
    },
    theme_wapper_fragment: {
        name: 'Theme Swapper Fragment',
        path: 'theme_wapper_fragment'
    },
    alert_fragment: {
        name: 'Alert Fragment',
        path: 'alert_fragment'
    },
    toast_fragment: {
        name: 'Toast Fragment',
        path: 'toast_fragment'
    }
};

export const screensArray = Object.values(screens);
export const lastScreenIndex = screensArray.length - 1;

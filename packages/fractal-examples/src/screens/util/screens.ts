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
    }
};

export const screensArray = Object.values(screens);
export const lastScreenIndex = screensArray.length - 1;

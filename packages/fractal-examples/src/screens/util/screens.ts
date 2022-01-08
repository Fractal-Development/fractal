import { routes } from './routes';

export interface Screen {
    name: string;
    path: string;
}

export const screens = {
    chipFragment: {
        name: 'Chip Fragment',
        path: routes.component.replace(':component', 'chip_fragment_screen')
    },
    chipListFragment: {
        name: 'Chip List Fragment',
        path: routes.component.replace(':component', 'chip_list_fragment_screen')
    },
    colorTabListFragment: {
        name: 'Color Tab List Fragment',
        path: routes.component.replace(':component', 'color_tab_list_fragment_screen')
    },
    recyclerViewFragment: {
        name: 'Recycler View Fragment',
        path: routes.component.replace(':component', 'recycler_view_fragment_screen')
    },
    authScreenFragment: {
        name: 'Authentication Screen Fragment',
        path: routes.component.replace(':component', 'authentication_screen_fragment_screen')
    },
    chatFragment: {
        name: 'Chat Content Fragment',
        path: routes.component.replace(':component', 'chat_content_fragment_screen')
    }
};

export const screensArray = Object.values(screens);
export const lastScreenIndex = screensArray.length - 1;

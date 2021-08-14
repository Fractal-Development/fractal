export interface Screen {
    name: string;
    path: string;
}

export const screens: Array<Screen> = [
    {
        name: 'Recycler View Fragment',
        path: '/recycler_view_fragment_screen'
    },
    {
        name: 'Chip Fragment',
        path: '/chip_fragment_screen'
    }
];

export const lastScreenIndex = screens.length - 1;

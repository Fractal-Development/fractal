export interface Screen {
    name: string;
    path: string;
}

export const screens: Array<Screen> = [
    {
        name: 'RecyclerViewFragmentScreen',
        path: '/recycler_view_fragment_screen'
    },
    {
        name: 'ChipFragmentScreen',
        path: 'chip_fragment_screen'
    }
];

export const lastScreenIndex = screens.length - 1;

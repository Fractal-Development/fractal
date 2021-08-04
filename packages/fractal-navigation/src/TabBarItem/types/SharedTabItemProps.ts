export interface SharedTabItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
}

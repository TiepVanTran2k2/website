import { IconType } from 'react-icons';

export type TypeMenuItem = {
    title: string;
    icon: IconType;
    customComponent?: () => React.ReactNode;
    seperate?: boolean;
    new?: boolean;
};

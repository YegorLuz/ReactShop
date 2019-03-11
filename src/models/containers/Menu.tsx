import { IMenuItemData } from '../../data/menu';

export interface IProps {
    data: Array<IMenuItemData>,
    className?: string,
    animation?: any,
}

export interface IDefaultProps {
    className: string,
}
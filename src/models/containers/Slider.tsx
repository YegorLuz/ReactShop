import { List, Map } from 'immutable';

export interface IItem extends Map<string, any> {};

export interface IProps {
    title: string,
    data: List<IItem>,
    renderSlide?: (item: IItem, itemWidth: number) => void,
}

export interface IState {
    width: number,
    left: number,
}
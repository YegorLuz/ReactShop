import { List } from 'immutable';
import { IProduct } from '../data/immutable';

export interface IProps {
    products: List<IProduct>,
    cat: number,
    color: string,
    size: string,
    onClickColorFilterItem: (value: string) => void,
    onClickSizeFilterItem: (value: string) => void,
}
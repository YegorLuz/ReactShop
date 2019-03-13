import { List } from 'immutable';
import { IProduct } from '../data/immutable';

export interface IProps {
    color: string,
    size: string,
    products: List<IProduct>,
}
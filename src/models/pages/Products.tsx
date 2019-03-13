import { List, Map } from 'immutable';
import { IProduct } from '../data/immutable';
import { RouteChildrenProps } from 'react-router';

interface IParams {
    id: string,
}

export interface IProps extends RouteChildrenProps<IParams> {
    products: List<IProduct>,
    getProducts?: () => void,
}

export interface IStore {
    products: Map<string, any>,
}

export interface IState {
    cat: number | null,
    color: string,
    size: string,
}
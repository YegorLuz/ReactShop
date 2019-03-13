import { Map, List } from 'immutable';
import { RouteChildrenProps } from 'react-router';
import { IProduct } from '../data/immutable';

interface IParams {
    id: string,
}

export interface IPropsPart {
    products: List<IProduct>,
}

export interface IProps extends IPropsPart, IActions, RouteChildrenProps<IParams> {}

export interface IStore {
    products: Map<string, any>,
}

export interface IState {
    prod: number | null,
}

export interface IActions {
    getProducts?: () => void,
}
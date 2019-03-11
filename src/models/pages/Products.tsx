import { List, Map } from 'immutable';

export interface IProps {
    products: List<Map<string, any>>,
}

export interface IState {
    products: Map<string, any>,
}
import { IProducts } from '../data/immutable';

export interface IProps {
    products: IProducts,
    getProducts?: () => void,
}

export interface IState {
    products: Map<string, any> & {
        products: IProducts,
    }
}
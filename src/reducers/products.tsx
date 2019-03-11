import { PRODUCTS, SAVE } from '../constants';
import { Map, fromJS, List } from 'immutable';
import { IAction } from '../models/reducers/products';

const defaultState = Map({
    products: List([]),
});

export default (state = defaultState, action: IAction) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCTS + SAVE: {
            return state.set('products', fromJS(payload.data));
        }

        default: {
            return state;
        }
    }
};
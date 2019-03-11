import { PRODUCTS, GET, SAVE } from '../constants';

export function getProducts () {
    return {
        type: PRODUCTS + GET,
    };
}

export function saveProducts (data: []) {
    return {
        type: PRODUCTS + SAVE,
        payload: {
            data,
        },
    };
}
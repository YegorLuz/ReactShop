import { PRODUCTS, GET } from '../constants';
import { takeLatest } from 'redux-saga/effects';
import { getProducts } from './products';

export function* watcher () {
    yield takeLatest(PRODUCTS + GET, getProducts);
}

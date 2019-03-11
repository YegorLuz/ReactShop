import axios from 'axios';
import { HOST } from '../constants';
import { put, call } from 'redux-saga/effects';
import { saveProducts } from '../actions/products';

export function* getProducts () {
    const response = yield call(axios.get, `${HOST}/products`);
    yield put(saveProducts(response.data));
}
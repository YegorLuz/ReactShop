import { List, Map } from 'immutable';

export interface IProduct extends Map<string, any> {
    id: number,
    title: string,
    description: string,
}

export interface IProducts extends List<IProduct> {};
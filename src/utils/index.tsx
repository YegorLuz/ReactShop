import * as React from 'react';
import { Link } from 'react-router-dom';
import images from '../data/images';
import { IProduct } from '../models/data/immutable';

export function formatPrice (price: number) {
    return `$ ${price.toFixed(2)}`;
}

export const renderProductListItem = (item: IProduct, itemWidth: number) =>
    <li key={item.get('id')} className='product' style={{ width: `${itemWidth}px` }}>
        <Link to={`/product/${item.get('id')}`}>
            <div className='product-image'>
                <img src={images.getIn(['products', item.get('id')])} alt={item.get('title')} />
            </div>
            <div className='product-info'>
                <h3 className='product-title'>{item.get('title')}</h3>
                <p className='product-description'>{item.get('description')}</p>
                <div className='product-price'>{formatPrice(item.get('price'))}</div>
            </div>
        </Link>
    </li>;
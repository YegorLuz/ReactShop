import * as React from 'react';
import { IProduct } from '../models/data/immutable';
import { renderProductListItem } from '../utils';
import { IProps } from '../models/containers/ProductsList';
import { List } from 'immutable';

class ProductsList extends React.Component<IProps> {
    render () {
        const { products, color, size } = this.props;
        let filteredProducts : List<IProduct> = products;

        if (!!color) {
            filteredProducts = filteredProducts.filter((item: IProduct) => item.get('color') === color);
        }

        if (!!size) {
            filteredProducts = filteredProducts.filter((item: IProduct) => item.get('size') === size);
        }

        return (
            <div className='product-list'>
                <ul>
                    {filteredProducts.map((item: IProduct) => renderProductListItem(item, 280))}
                </ul>
            </div>
        );
    }
}

export default ProductsList;
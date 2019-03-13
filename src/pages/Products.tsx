import * as React from 'react';
import { connect } from 'react-redux';
import { IProps, IStore, IState } from '../models/pages/Products';
import { IProduct } from '../models/data/immutable';
import { List } from 'immutable';
import { getProducts } from '../actions/products';
import { renderProductListItem } from '../utils';
import CatalogFilters from '../containers/CatalogFilters';
import ProductsList from '../containers/ProductsList';

class Products extends React.Component<IProps> {
    state : IState;
    private onClickColorFilterItem : (value: string) => void;
    private onClickSizeFilterItem : (value: string) => void;

    constructor (props: IProps) {
        super(props);

        this.state = {
            cat: null,
            color: '',
            size: '',
        };

        this.onClickColorFilterItem = this.onClickFilterItem.bind(this, 'color');
        this.onClickSizeFilterItem = this.onClickFilterItem.bind(this, 'size');
    }

    static getDerivedStateFromProps (props: IProps) {
        const { match: { params } } = props;
        if (params.id) {
            return {
                cat: parseInt(params.id),
            };
        }

        return {
            cat: null,
        };
    }

    componentDidMount () {
        this.props.getProducts();
    }

    onClickFilterItem (type: string, value: string) {
        this.setState({
            [type]: value,
        });
    }

    render () {
        const { cat, color, size } = this.state;
        const products = cat ? this.props.products.filter((item: IProduct) => item.get('cat') === cat) : this.props.products;

        return (
            <div className='wrapper'>
                <header className='page-title'>Catalog Page</header>
                <div className='catalog'>
                    <CatalogFilters
                        products={products}
                        color={color}
                        size={size}
                        cat={cat}
                        onClickColorFilterItem={this.onClickColorFilterItem}
                        onClickSizeFilterItem={this.onClickSizeFilterItem}
                    />
                    <ProductsList color={color} size={size} products={products} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => ({
    products: state.products.get('products'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
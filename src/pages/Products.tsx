import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProps, IStore, IState } from '../models/pages/Products';
import categories from '../data/categories';
import { IProduct } from '../models/data/immutable';
import { getProducts } from '../actions/products';
import { renderProductListItem } from '../utils';

class Products extends React.Component<IProps> {
    state : IState;

    constructor (props: IProps) {
        super(props);

        this.state = {
            cat: null,
        };
    }

    static getDerivedStateFromProps (props: IProps, state: IState) {
        const { match: { params } } = props;
        if (params.id && parseInt(params.id) !== state.cat) {
            return {
                cat: parseInt(params.id),
            };
        }

        return null;
    }

    componentDidMount () {
        this.props.getProducts();
    }

    render () {
        const { cat } = this.state;
        const products = cat ? this.props.products.filter((item: IProduct) => item.get('cat') === cat) : this.props.products;

        return (
            <div className='wrapper'>
                <header className='page-title'>Catalog Page</header>
                <div className='catalog'>
                    <aside className='categories'>
                        <h3>Categories</h3>
                        <ul className='categories-list'>
                            {categories.map((item) => <li key={item.id} className='category-item'>
                                <Link to={`/catalog/${item.id}`}>{item.title}</Link>
                            </li>)}
                        </ul>
                    </aside>
                    <div className='product-list'>
                        <ul>
                            {products.map((item: IProduct) => renderProductListItem(item, 280))}
                        </ul>
                    </div>
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
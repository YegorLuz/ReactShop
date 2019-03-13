import * as React from 'react';
import { connect } from 'react-redux';
import { IProps, IPropsPart, IState, IStore, IActions } from '../models/pages/Product';
import { IProduct } from '../models/data/immutable';
import { getProducts } from '../actions/products';
import images from '../data/images';

class Product extends React.Component<IProps> {
    state : IState;

    constructor (props: IProps) {
        super(props);

        this.state = {
            prod: null,
        };
    }

    static getDerivedStateFromProps (props: IProps, state: IState) {
        const { match: { params } } = props;
        if (params.id) {
            return {
                prod: parseInt(params.id),
            };
        }

        return {
            prod: null,
        };
    }

    componentDidMount () {
        const { products } = this.props;
        if (!products.size) {
            this.props.getProducts();
        }
    }

    render () {
        const { prod } = this.state;
        const { products } = this.props;
        const product : IProduct = products.filter((item: IProduct) => item.get('id') === prod).first();

        if (product && product.size) {
            return (
                <div className='wrapper'>
                    <header className='page-title'>{product.get('title')}</header>
                    <div className='main-banner'>
                        <img src={images.getIn(['products', product.get('id')])} />
                    </div>
                    <div className='parameters'>
                        <h3>Parameters</h3>
                        <ul className='params'>
                            <li className='color'>Color: <strong>{product.get('color')}</strong><div style={{ backgroundColor: product.get('color') }} /></li>
                            <li className='size'>Size: <strong>{product.get('size')}</strong></li>
                        </ul>
                    </div>
                    <div className='description'>
                        <h3>Description</h3>
                        <p>{product.get('description')}</p>
                    </div>
                </div>
            );
        }

        return <div className='wrapper'>
            <header className='page-title'>No product found</header>
        </div>;
    }
}

const mapStateToProps = (state: IStore) : IPropsPart => ({
    products: state.products.get('products'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) : IActions => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
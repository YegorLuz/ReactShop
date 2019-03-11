import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from '../containers/Slider';
import { getProducts } from '../actions/products';
import { IProduct } from '../models/data/immutable';
import { IProps, IState } from '../models/pages/Home';
import { formatPrice } from '../utils';
import images from '../data/images';
import '../styles/product.scss';


class Home extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);

        this.renderSlide = this.renderSlide.bind(this);
    }

    componentDidMount () {
        this.props.getProducts();
    }

    renderSlide (item: IProduct) {
        return <li key={item.get('id')} className='product'>
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
    }

    render () {
        const { products } = this.props;

        return (
            <div className='wrapper'>
                <header className='page-title'>Home Page</header>
                <Slider title='Products' data={products} renderSlide={this.renderSlide} />
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    products: state.products.get('products'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
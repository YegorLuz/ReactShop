import * as React from 'react';
import { connect } from 'react-redux';
import Slider from '../containers/Slider';
import { getProducts } from '../actions/products';
import { IProduct } from '../models/data/immutable';
import { IProps, IState } from '../models/pages/Home';
import { renderProductListItem } from '../utils';
import images from '../data/images';
import content from '../data/strings';
import '../styles/product.scss';


class Home extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);

        this.renderSlide = this.renderSlide.bind(this);
    }

    componentDidMount () {
        this.props.getProducts();
    }

    renderSlide (item: IProduct, itemWidth: number) {
        return renderProductListItem(item, itemWidth);
    }

    render () {
        const { products } = this.props;

        return (
            <div className='wrapper'>
                <header className='page-title'>Home Page</header>
                <div className='main-banner'>
                    <img src={images.getIn(['banners', 'main'])} />
                </div>
                <div className='about'>
                    {content.getIn(['pages', 'aboutUs', 'content']).take(2).map((value: string, index: number) => <p key={index}>{value}</p>)}
                </div>
                <div className='block'>
                    <Slider title='Best Sellers' data={products} renderSlide={this.renderSlide} />
                </div>
                <div className='block'>
                    <Slider title='Recommended Products' data={products} renderSlide={this.renderSlide} />
                </div>
                <div className='block'>
                    <Slider title='Recently Viewed Products' data={products} renderSlide={this.renderSlide} />
                </div>
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
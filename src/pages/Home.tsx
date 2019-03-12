import * as React from 'react';
import { connect } from 'react-redux';
import Slider from '../containers/Slider';
import { getProducts } from '../actions/products';
import { IProduct } from '../models/data/immutable';
import { IProps, IState } from '../models/pages/Home';
import { renderProductListItem } from '../utils';
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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nam dignissimos reiciendis deleniti ea dolore. Eos, itaque autem? Veritatis optio eum temporibus possimus doloremque illum culpa ea iusto eaque id qui blanditiis in iste quidem, dicta inventore saepe nostrum repellendus assumenda ullam! Laborum nemo eum commodi, dolorem neque odio quisquam nihil nulla esse eos! Eos asperiores nulla ducimus fugit beatae aperiam debitis delectus, ratione rem voluptate perspiciatis eligendi dolore obcaecati quidem tempora magnam cupiditate amet natus.</p>
                    <p>Earum in exercitationem repellendus, ullam, corrupti pariatur vero quis dolorem nisi incidunt quidem aliquam maiores animi fuga nam omnis iste accusantium eius rem quo? Dolores corrupti voluptatem, porro provident iure eveniet. Corrupti reiciendis veritatis sequi quasi blanditiis, rem aspernatur reprehenderit eaque ipsa quia et voluptatum illo neque animi voluptatem deleniti rerum sint ratione, exercitationem atque culpa facere nihil cupiditate nobis. Laboriosam totam nostrum ipsa autem aliquid ipsam voluptates id distinctio numquam sapiente amet nihil, quo beatae tenetur dolorum voluptate. Error et, est ipsum praesentium natus, perferendis optio ab a dolorem debitis accusantium labore. Id fuga cupiditate quidem omnis autem doloribus, ducimus, cumque modi atque mollitia quisquam non neque. Cupiditate ducimus aperiam accusamus modi quo doloremque harum enim inventore, maiores numquam reprehenderit rem, tempora eum mollitia dolorum provident.</p>
                    <p>Nisi provident blanditiis esse? Fugit placeat amet consequatur quia minima! Vero et tempora esse unde consequuntur tenetur officia explicabo neque praesentium autem laudantium, laboriosam at nemo maxime expedita sit voluptas fugiat earum minima iste perferendis quisquam. Quod aspernatur sint recusandae non maxime sequi aliquam tenetur temporibus, voluptas ea hic at labore! Consequatur dolore iusto ipsam iure? Ipsa eveniet voluptas vel sed quod saepe, vero neque. Delectus laboriosam necessitatibus natus magni, aspernatur quam aut culpa pariatur. Accusantium, suscipit quidem voluptatibus ea officiis cupiditate quisquam veniam magnam dolore maxime, error repellendus facere rerum nisi illum, tempore distinctio? Officia, necessitatibus?</p>
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
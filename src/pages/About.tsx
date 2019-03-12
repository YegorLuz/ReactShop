import * as React from 'react';
import { connect } from 'react-redux';
import Slider from '../containers/Slider';
import { IProps, IState } from '../models/pages/About';
import { IProduct } from '../models/data/immutable';
import { renderProductListItem } from '../utils';
import { getProducts } from '../actions/products';
import images from '../data/images';

class About extends React.Component<IProps> {
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
                <header className='page-title'>About Us</header>
                <div className='main-banner'>
                    <img src={images.getIn(['banners', 'main'])} />
                </div>
                <div className='about'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate sapiente reprehenderit tenetur. Ipsum, modi. Aliquam, architecto vitae sint accusantium ipsa ut consectetur repudiandae quidem quia labore corporis, optio quo eveniet deserunt dolorum. Reprehenderit voluptatem rem repellat illum, dolor quibusdam placeat neque, ratione nihil harum officiis aperiam inventore rerum cumque sunt ea provident? Eius iste deleniti dolores omnis, ipsa voluptate doloribus et harum animi vitae incidunt voluptas ad accusantium ut consequatur eligendi, quos nesciunt officia fuga hic cumque dolorum?</p>
                    <p>Similique tenetur accusantium temporibus aspernatur doloremque consequuntur ipsa dicta, molestias eveniet velit minus cumque debitis porro earum! Iusto illum quod ad ex modi. Blanditiis dicta sequi commodi possimus ipsa nesciunt a? Corrupti provident molestiae ipsam magnam impedit qui eaque consequatur officia possimus doloribus optio magni perspiciatis, ipsa odio sunt dolorum eligendi a id illum nobis amet! Dolores ab molestiae blanditiis qui dignissimos, vero quis! Mollitia provident maiores animi quaerat sunt? Dolorem voluptates ea esse aut excepturi. Delectus laudantium fuga voluptatibus dignissimos facilis consequatur minus at a rerum harum veritatis ipsa eius aut atque sunt eos accusantium optio, doloremque pariatur itaque. Hic debitis quae eius illum, corrupti reprehenderit incidunt sit placeat nam, sint fuga veniam nihil aliquid distinctio doloribus excepturi delectus.</p>
                    <p>Dolorum officiis commodi doloremque recusandae. Nihil laborum excepturi maiores id aut unde consectetur minus fuga, nisi a deserunt dolores iure repellendus est! Explicabo nisi vero impedit earum suscipit, perspiciatis minima magnam, harum a dolorem est corrupti amet ipsum velit quam, ipsa quo voluptatibus repellat? Voluptates magni laboriosam officia excepturi eum fugiat! Eveniet consequuntur voluptatum rerum quas sunt corrupti veniam nobis iure cumque quisquam, amet minima numquam repellat vero provident unde id accusantium, dolor dignissimos! Recusandae sint beatae ab illum sapiente deleniti, accusamus excepturi voluptates. Magni repellat eveniet, consectetur ipsa laborum commodi quaerat obcaecati et assumenda possimus exercitationem quas saepe incidunt cumque voluptates tempore, autem, debitis fugiat!</p>
                    <p>Quaerat nam error ad magni accusamus incidunt numquam consequuntur, consequatur quae atque assumenda eligendi, aspernatur doloribus voluptatem temporibus eos ab tempora eveniet blanditiis ipsa totam dolore optio hic tempore! Provident fugiat praesentium eveniet sunt rerum! Nulla suscipit consequatur, omnis a reiciendis quo placeat totam adipisci pariatur excepturi repellendus minus aliquid voluptate, rem sed at quas vel nostrum porro, aperiam ducimus dicta laborum exercitationem. Odio laboriosam, dignissimos consequuntur quaerat vel saepe officia quibusdam. Minus, quam quibusdam. Ratione labore perspiciatis inventore at porro, corporis autem a excepturi dolorum reprehenderit dolore eum impedit culpa rerum iste ducimus. Asperiores, doloribus, error incidunt eos saepe, deserunt illo placeat dicta nemo tempore voluptate laboriosam quos labore a itaque ratione deleniti alias? Quo ea ut tempora eos asperiores. Cum eligendi consectetur deleniti fuga porro suscipit vel pariatur temporibus facere distinctio tempore eos, libero cupiditate soluta sit nostrum vero dolor ut.</p>
                    <p>Dolor, ipsum rem ex vero odit aliquam nisi obcaecati quibusdam voluptate tempore nemo, in dolores molestias vitae facere deserunt repudiandae! Ducimus, magnam officia! Quod temporibus ratione, soluta nam sint labore enim optio provident! Maxime a, hic provident ducimus omnis est ex dignissimos tempora suscipit dolores numquam ullam dolore expedita quaerat odio accusamus at perferendis vero rerum voluptas voluptates placeat neque? Ad dolores voluptate perspiciatis vero sed quaerat, quis dolorum veniam nemo hic, magni a eos sequi minima consequatur deleniti consequuntur alias ipsum laudantium aspernatur molestiae maiores architecto iure? Neque fugiat quidem reiciendis laudantium aspernatur quam, id velit veniam, eveniet quo, perferendis officia.</p>
                    <p>Laboriosam, ut quisquam adipisci fugit repellat nobis nesciunt facilis cumque, sunt ratione maiores, tempore mollitia provident odit soluta! Iure ipsum perferendis, quia architecto doloremque fuga suscipit. Harum veniam perferendis, ducimus eum tenetur officiis repellat, deleniti facere enim excepturi dolorum porro exercitationem a debitis ut officia fugiat aperiam reprehenderit velit ullam totam suscipit itaque. Nesciunt sint officia vero inventore molestiae repellat asperiores ratione doloremque tenetur alias culpa reprehenderit cupiditate iure sit excepturi ad nobis, exercitationem soluta consequatur provident placeat fuga saepe quo mollitia! Cumque numquam ipsum iusto exercitationem nihil ea, maxime quas esse natus provident dolorem expedita hic, fugiat at tempora quibusdam aperiam nostrum sunt. Dolore dolorem officia quaerat tempore eligendi pariatur sapiente eum animi distinctio corrupti omnis natus, voluptate ea autem? Labore quasi mollitia quibusdam quisquam rerum, harum dolorum iste blanditiis nam fugiat adipisci architecto amet, nesciunt ducimus odit ullam tempore soluta laudantium cupiditate consectetur sed. Nihil sequi dolore maxime accusamus, laudantium vero. Iste sint reiciendis ipsam enim nobis quibusdam similique quo eaque ducimus officia molestiae, et consequuntur fugiat perspiciatis sed quas unde cupiditate.</p>
                    <p>Delectus, illum totam tenetur assumenda similique minus suscipit consectetur unde itaque deleniti dignissimos obcaecati! Quos, illum ducimus maiores, dolores quaerat libero, rerum nesciunt eaque vitae deserunt distinctio fugiat. Tempora amet libero repellat quibusdam quas debitis officiis quam temporibus ullam, deleniti veritatis velit aliquam saepe obcaecati labore voluptatibus, assumenda tenetur eveniet quia dolores. Ullam maiores, ex tempore, enim soluta, numquam suscipit nulla dolores autem eos magnam. Sed, expedita. Magnam dolor quam distinctio eum quaerat quod nesciunt quasi harum reiciendis quae! Voluptatum natus deleniti porro officiis molestias iusto voluptate, earum eum! Iste ut nam quasi harum voluptatum dolorum dolore nobis error facilis. Cupiditate doloremque dicta error molestiae vel dolorem commodi modi facilis excepturi culpa quam voluptatum nemo, blanditiis, ea delectus. Veniam debitis fugit exercitationem maxime vel dignissimos, pariatur quis, esse dicta maiores ex, nam nulla. Omnis voluptatum voluptatem, distinctio fugit autem exercitationem error expedita, voluptatibus reprehenderit enim libero modi quidem porro quisquam veritatis quo debitis eaque eligendi. Quas consequuntur ex in facilis, labore animi eos obcaecati ducimus, enim molestiae dolorem quia voluptas eaque velit dicta eligendi odio rerum fugit officia aperiam deserunt laboriosam culpa. Numquam sit voluptatem recusandae earum adipisci eius error aliquam fugiat! Molestiae, porro voluptas quia beatae doloribus inventore nostrum recusandae neque sapiente maiores deleniti, officia, maxime possimus non eligendi. Amet asperiores in quaerat porro, excepturi iure error animi qui suscipit quasi eligendi ratione atque voluptas eveniet corrupti distinctio impedit? Sint quae maiores ullam cumque, quia commodi repellendus, molestias dolore provident perspiciatis odit quidem ipsum, et dolorum in minus amet facilis nihil voluptate corrupti sunt distinctio quis inventore totam. Recusandae, ipsa similique dicta repellendus vitae vero, repudiandae quod minima consequuntur eos pariatur ut voluptatibus iusto aperiam!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
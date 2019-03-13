import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import categories, { ICategory } from '../data/categories';
import { IProps } from '../models/containers/CatalogFilters';
import { IProduct } from '../models/data/immutable';
import CatalogFilter from '../components/CatalogFilter';

class CatalogFilters extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);

        this.renderDefaultCategoryItem = this.renderDefaultCategoryItem.bind(this);
        this.renderCategoryItem = this.renderCategoryItem.bind(this);
        this.renderDefaultCheckBoxItem = this.renderDefaultCheckBoxItem.bind(this);
        this.renderCheckBoxItem = this.renderCheckBoxItem.bind(this);
        this.onClickSizeFilterItem = this.onClickSizeFilterItem.bind(this);
        this.onClickColorFilterItem = this.onClickColorFilterItem.bind(this);
    }

    renderDefaultCategoryItem () {
        const { cat } = this.props;

        return <li key='any' className={classNames('category-item', { active: !cat })}>
            <div className='bg' />
            <Link to='/catalog'>Any</Link>
        </li>;
    }

    renderCategoryItem (item: ICategory) {
        const { cat } = this.props;

        return <li key={item.id} className={classNames('category-item', { active: cat === item.id })}>
            <div className='bg' />
            <Link to={`/catalog/${item.id}`}>{item.title}</Link>
        </li>;
    }

    renderDefaultCheckBoxItem (value: string, handler: (value: string) => void) {
        return <li
            key='any'
            className={classNames('filter-item', { active: !value })}
            onClick={() => handler('')}
        >any</li>;
    }

    renderCheckBoxItem (item: string, value: string, handler: (value: string) => void) {
        return <li
            key={item}
            className={classNames('filter-item', { active: item === value })}
            onClick={() => handler(item)}
        >{item}</li>;
    }

    onClickColorFilterItem (value: string) {
        this.props.onClickColorFilterItem(value);
    }

    onClickSizeFilterItem (value: string) {
        this.props.onClickSizeFilterItem(value);
    }

    render () {
        const { products, color, size } = this.props;
        const colorFilters = products.map((item: IProduct) => item.get('color')).toSet();
        const sizeFilters = products.map((item: IProduct) => item.get('size')).toSet();

        return (
            <aside className='categories'>
                <CatalogFilter
                    title='Categories'
                    className='no-padding'
                    listClassName='categories-list'
                    data={categories}
                    defaultRenderer={this.renderDefaultCategoryItem}
                    itemRenderer={(item: ICategory) => this.renderCategoryItem(item)}
                />
                <CatalogFilter
                    title='Color'
                    data={colorFilters}
                    defaultRenderer={() => this.renderDefaultCheckBoxItem(color, this.onClickColorFilterItem)}
                    itemRenderer={(item: string) => this.renderCheckBoxItem(item, color, this.onClickColorFilterItem)}
                />
                <CatalogFilter
                    title='Size'
                    data={sizeFilters}
                    defaultRenderer={() => this.renderDefaultCheckBoxItem(size, this.onClickSizeFilterItem)}
                    itemRenderer={(item: string) => this.renderCheckBoxItem(item, size, this.onClickSizeFilterItem)}
                />
            </aside>
        );
    }
}

export default CatalogFilters;
import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../models/components/CatalogFilter';

const CatalogFilter = (props: IProps) => {
    const { data, title, className = null, listClassName = null } = props;

    let result = [];

    for (let value of data) {
        result.push(props.itemRenderer(value));
    }

    return (
        <div className={classNames('filter-block', className)}>
            <h3>{title}</h3>
            <ul className={listClassName || 'filter'}>
                {props.defaultRenderer()}
                {result}
            </ul>
        </div>
    );
};

export default CatalogFilter;

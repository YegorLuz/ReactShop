import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProps } from '../models/components/MenuItem';

const MenuItem = (props: IProps) => (
    <li className='menu-item'>
        {props.animation}
        <Link className='menu-item-link' to={props.url}>
            {props.text}
        </Link>
    </li>
);

export default MenuItem;
import * as React from 'react';
import MenuItem from '../components/MenuItem';
import { IProps, IDefaultProps } from '../models/containers/Menu';
import { IMenuItemData } from '../data/menu';
import '../styles/menu.scss';

class Menu extends React.Component<IProps> {
    static defaultProps: IDefaultProps;

    constructor (props: IProps) {
        super(props);

        this.renderItems = this.renderItems.bind(this);
    }

    renderItems () {
        const { data, animation } = this.props;
        const pathName = window.location.pathname || '/';
        const firstPathPart = '/' + pathName.split('/')[1];

        return data.map((item: IMenuItemData) =>
            <MenuItem
                key={item.component}
                {...item}
                isActive={item.urls ? item.urls.indexOf(firstPathPart) >= 0 : firstPathPart === item.url}
                animation={animation}
            />
        );
    }

    render () {
        const { className } = this.props;

        return (
            <ul className={className}>
                {this.renderItems()}
            </ul>
        );
    }
};

Menu.defaultProps = {
    className: 'menu',
};

export default Menu;
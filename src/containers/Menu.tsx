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

        return data.map((item: IMenuItemData) => <MenuItem key={item.component} animation={animation} {...item} />);
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
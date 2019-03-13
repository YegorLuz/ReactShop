import * as React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import menu from '../data/menu';
import '../styles/header.scss';
const logo = require('../../assets/logo.png');
import strings from '../data/strings';

class Header extends React.Component {
    static renderAnimation () {
        return <div className='link-bg'>
            {(new Array(16)).fill(1).map((val: number, index: number) => <div key={`${index}`} />)}
        </div>;
    }

    render () {
        return (
            <header id='header'>
                <div className='container'>
                    <div className='row between'>
                        <div className='logo'>
                            <Link to='/'>
                                <img src={logo} alt='Logo' />
                            </Link>
                            <span>{strings.get('logoText')}</span>
                        </div>
                        <Menu data={menu} animation={Header.renderAnimation()} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
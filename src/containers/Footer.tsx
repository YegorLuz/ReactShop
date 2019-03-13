import * as React from 'react';
import { Link } from 'react-router-dom';
import menu from '../data/menu';
import Menu from './Menu';
import '../styles/footer.scss';
const logo = require('../../assets/logo.png');
import strings from '../data/strings';

class Footer extends React.Component {
    static renderAnimation () {
        return <div className='link-arrow-bg'>
            {(new Array(1).fill(1).map((val: number, index: number) => <div key={`${index}`} />))}
        </div>;
    }

    render () {
        return (
            <footer id='footer'>
                <div className='container'>
                    <div className='row between center-items'>
                        <div className='copyrights'>
                            {strings.get('copyrights')}
                        </div>
                        <Menu className='footer-menu' animation={Footer.renderAnimation()} data={menu} />
                        <div className='logo'>
                            <Link to='/'>
                                <img src={logo} alt='Logo' />
                            </Link>
                            <div className='text'>{strings.get('logoText')}</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
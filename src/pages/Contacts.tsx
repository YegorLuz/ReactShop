import * as React from 'react';
import contacts, { IContact } from '../data/contacts';
import '../styles/contacts.scss';

const Contacts = () => (
    <div className='wrapper'>
        <header className='page-title'>Contacts</header>
        <div className='contacts'>
            {contacts.map((item: IContact) => <div className='contact'>
                <div className='location'>{item.location}</div>
                <div className='address'>{item.address}</div>
                <div className='cell'>{item.cell}</div>
                <div className='time'>{item.time}</div>
            </div>)}
        </div>
    </div>
);

export default Contacts;
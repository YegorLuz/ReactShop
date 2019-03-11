import * as React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { IProps } from '../models';

const App = (props: IProps) => (
    <>
        <Header />
        <main id='body'>
            <div className='container'>
                {props.children}
            </div>
        </main>
        <Footer />
    </>
);

export default App;
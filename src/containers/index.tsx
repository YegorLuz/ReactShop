import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';
import { IProps } from '../models';
import '../styles/common.scss';


const AppContainer = (props: IProps) => (
    <Provider store={store}>
        <App>
            {props.children}
        </App>
    </Provider>
);

export default AppContainer;
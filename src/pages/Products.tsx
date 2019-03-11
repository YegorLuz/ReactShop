import * as React from 'react';
import { connect } from 'react-redux';
import { IProps, IState } from '../models/pages/Products';

class Products extends React.Component<IProps> {
    render () {
        return (
            <div className='wrapper'></div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    products: state.products.get('products'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
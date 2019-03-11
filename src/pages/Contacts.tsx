import * as React from 'react';
import { connect } from 'react-redux';
import { IProps, IState } from '../models/pages/Contacts';

class Contacts extends React.Component<IProps> {
    render () {
        return (
            <div className='wrapper'></div>
        );
    }
}

const mapStateToProps = (state: IState) => ({

});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
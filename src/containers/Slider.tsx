import * as React from 'react';
import '../styles/slider.scss';
import { IProps, IItem } from '../models/containers/Slider';

class Slider extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);

        this.renderSlide = this.renderSlide.bind(this);
    }

    renderSlide (item: IItem) {
        return this.props.renderSlide(item);
    }

    render () {
        const { title, data } = this.props;

        if (!data.size) return null;

        return (
            <>
                <h3>{title}</h3>
                <div className='slider'>
                    <div className='arrow arrow-left'>{'<<'}</div>
                    <ul className='slides' style={{ width: `${230 * data.size}px` }}>
                        {data.map((item: IItem) => this.renderSlide(item))}
                    </ul>
                    <div className='arrow arrow-right'>{'>>'}</div>
                </div>
            </>
        );
    }
}

export default Slider;
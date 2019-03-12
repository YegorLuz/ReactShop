import * as React from 'react';
import '../styles/slider.scss';
import { IProps, IItem, IState } from '../models/containers/Slider';

class Slider extends React.Component<IProps> {
    private _slider: HTMLDivElement | null;
    state: IState;

    constructor (props: IProps) {
        super(props);

        this.state = {
            width: 0,
            left: 0,
        };

        this.renderSlide = this.renderSlide.bind(this);
        this.onRef = this.onRef.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onSlideLeft = this.onSlideLeft.bind(this);
        this.onSlideRight = this.onSlideRight.bind(this);

        this._slider = null;
    }

    componentDidMount () {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.onResize);
    }

    onRef (node: HTMLDivElement) {
        this._slider = node;
        this.onResize();
    }

    onResize () {
        if (this._slider) {
            const { width } = this._slider.getBoundingClientRect();
            this.setState({
                width,
            });
        }
    }

    onSlideLeft () {
        this.setState((state: IState) => {
            const { width, left } = state;
            const nextLeft = left < 0 ? left + width : left;
            return {
                left: nextLeft,
            };
        });
    }

    onSlideRight () {
        const { data } = this.props;
        this.setState((state: IState) => {
            const { width, left } = state;
            const nextLeft = left > -(width * Math.floor(data.size / 5)) ? left - width : left;
            return {
                left: nextLeft,
            };
        });
    }

    renderSlide (item: IItem) {
        const { width } = this.state;
        return this.props.renderSlide(item, width / 5);
    }

    render () {
        const { title, data } = this.props;
        const { width, left } = this.state;

        if (!data.size) return null;

        return (
            <>
                <h3>{title}</h3>
                <div className='slider-container'>
                    <div className='arrow arrow-left' onClick={this.onSlideLeft}>
                        <span>&#171;</span>
                    </div>
                    <div ref={this.onRef} className='slider'>
                        <ul className='slides' style={{ width: `${(width / 5) * data.size}px`, left: `${left}px` }}>
                            {data.map((item: IItem) => this.renderSlide(item))}
                        </ul>
                    </div>
                    <div className='arrow arrow-right' onClick={this.onSlideRight}>
                        <span>&#187;</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Slider;
import React from 'react';
import './Counter.scss'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.defaultValue };
    }
    render() {
        const counterValue = React.createElement(
            'span',
            {},
            this.state.value,
        );

        const minusBtn = React.createElement(
            'button',
            {
                onClick: () => { this.setState({ value: this.state.value - 1 }) },
            },
            '-'
        );
        const plusBtn = React.createElement(
            'button',
            {
                onClick: () => { this.setState({ value: this.state.value + 1 }) },
            },
            '+'
        );
        return React.createElement(
            'div',
            {
                className: 'counter'
            },
            minusBtn,
            counterValue,
            plusBtn,
        );
    }
}
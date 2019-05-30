import React from 'react';
import button from './Button.module.css';

class Button extends React.Component {
    constructor(props){
    super(props);
    this.state={};
    }
    render() {
        return(
            <button
                type={this.props.type}
                className={`${this.props.className || ''} ${button.btn} `}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
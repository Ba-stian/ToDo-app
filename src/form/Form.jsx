import React from 'react';
import Button from '../button/Button.jsx';
import form from './Form.module.css';

class Form extends React.Component {
    state = {
        content: ''
    };
    render() {
        return(
            <div className={form.wrap}>
                <h2 className={form.header}>Add new task:</h2>
                <form className={form.form} onSubmit={this.onSubmit}>
                    <input className={form.input} type="text" onChange={this.onChange} value={this.state.content}/>
                    <Button className={form.btn}>add</Button>
                </form>
            </div>
        )
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.content.length) {
            return;
        }
           this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }
}

export default Form;

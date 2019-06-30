import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {
    state = {
        title: 'Todo',
        content: '',
    };
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <form style={{ display: 'flex', margin: '10px'}}>
                <input
                    type='text'
                    name='content'
                    placeholder='Input todo here'
                    style={{ flex: 10, padding: '5px'}}
                    value={this.state.content}
                    placeHolder='Add Todo...'
                    onChange={this.onChange}
                />
                <input
                    type='button'
                    value='Submit'
                    className='btn'
                    onClick={this.props.addTodo.bind(this, { id: this.props.nextId, title: this.state.title, content: this.state.content} )}
                    style={{ flex: 2}}
                />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;

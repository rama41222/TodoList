import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {
    state = {
        title: 'My Todo: ',
        content: '',
    };
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({ title: this.state.title, content: this.state.content} );
        this.setState({ content: '' });
    };
    
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
                    onClick={this.onSubmit}
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

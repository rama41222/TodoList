import React, { Component } from 'react';
import { TodoItem } from '../';
import PropTypes from 'prop-types';

class Todos extends  Component {
    
    render() {
        return this.props.todos.map( todo => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} markDeleted={this.props.markDeleted}/>
        ));
    }
}

// proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;

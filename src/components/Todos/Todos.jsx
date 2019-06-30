import React, { Component } from 'react';

class Todos extends  Component {
    render() {
        console.log(this.props);
    
        return this.props.todos.map( todo => (
            <div>
                <h4>{ todo.title }</h4>
                <p>{ todo.id }</p>
                <p>{ todo.content }</p>
                <p>{ todo.completed }</p>
            </div>
        ));
    }
}

export default Todos;

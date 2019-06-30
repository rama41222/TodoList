import React, { Component } from 'react';
import './App.css';
import { Todos,AddTodo, Header } from './components';

class App extends Component {
    state = {
        number: 1,
        todos: []
    };
    
    nextId = () => {
      this.setState({ number: this.state.number + 1 })
    };
    
    markComplete = (id) => {
     this.setState({ todos: this.state.todos.map( todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            
            return todo;
         })
     })
    };
    
    addTodo = (todo) => {
        this.nextId();
        this.setState({ todos: [todo, ...this.state.todos ]})
    };
    markDeleted = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => (todo.id !== id )) });
    };
    
    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <Header />
                    <AddTodo addTodo={this.addTodo} nextId={this.state.number}/>
                    <Todos todos={ this.state.todos } markComplete={ this.markComplete } markDeleted={this.markDeleted}/>
                </div>
            </div>
        );
    }
}

export default App;

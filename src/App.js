import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoService } from './services';

import './App.css';
import { About, AddTodo, Header, Todos } from './components';

class App extends Component {
    state = {
        todos: []
    };
    
    async componentDidMount(): void {
        const { data } = await TodoService.getTodos();
        this.setState({ todos: data });
        
    }
    
    // nextId = () => {
    //   this.setState({ number: this.state.number + 1 })
    // };
    //
    
    markComplete = async (id) => {
        await TodoService.updateTodo(id, { completed: true });
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };
    
    addTodo = async (todo) => {
        const { data } = await TodoService.addTodo(todo).catch(console.error);
        this.setState({ todos: [data, ...this.state.todos] })
    };
    
    markDeleted = async (id) => {
        await TodoService.deleteTodo(id).catch(console.error);
        this.setState({ todos: this.state.todos.filter(todo => (todo.id !== id)) });
    };
    
    render() {
        return (
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Header/>
                        
                        <Route exact path='/' render={ props => (
                            <Fragment>
                                {
                                    /*
                                        // pass next id as param
                                        nextId={this.state.number}
                                    */
                                }
                                <AddTodo addTodo={ this.addTodo }/>
                                <Todos todos={ this.state.todos } markComplete={ this.markComplete }
                                       markDeleted={ this.markDeleted }/>
                            </Fragment>
                        ) }/>
                        <Route path='/about' component={ About }/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;


// Route will show everything in / and after slash. use exact keyworkd
// Todo: Code refactoring

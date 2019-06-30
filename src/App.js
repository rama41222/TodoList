import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { apiClient } from './utils';
import { BASE_URL } from "./constants";
import axios from 'axios';

import './App.css';
import { Todos,AddTodo, Header, About } from './components';

class App extends Component {
    state = {
        number: 1,
        todos: []
    };
    
    async componentDidMount(): void {
        const { data } = await apiClient.get(`?_limit=10`).catch(console.log);
        console.log(data);
        const lastNumber = data.length;
        this.setState({ todos: data, number: lastNumber });
        
    }
    
    // nextId = () => {
    //   this.setState({ number: this.state.number + 1 })
    // };
    //
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
        this.setState({ todos: [ todo, ...this.state.todos ]})
    };
    markDeleted = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => (todo.id !== id )) });
    };
    
    render() {
        return (
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Header />
                        
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                {
                                    /*
                                        // pass next id as param
                                        nextId={this.state.number}
                                    */
                                }
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={ this.state.todos } markComplete={ this.markComplete } markDeleted={this.markDeleted}/>
                            </React.Fragment>
                        )}/>
                        <Route path='/about' component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;


// Route will show everything in / and after slash. use exact keyworkd

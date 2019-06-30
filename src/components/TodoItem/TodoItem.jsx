import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getParentStyle = () => {
        return {
            margin: '10px',
            padding: '10px',
            backgroundColor: '#afe734',
            borderRadius: '10px',
            borderBottom: '4px #ff3342 solid'
        }
    };
    
    getChildStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' :  'none',
            textAlign: 'center',
            display: 'inline-block',
            marginRight: '10px',
            marginLeft: '20px',
        }
    };
    
    getButtonStyle = () => {
      return {
          margin: '10px',
          padding: '10px',
          borderRadius: '30%',
          backgroundColor: '#ff7b02',
          float: 'right',
      }
    };
    
    render() {
        const  { title, id, content } = this.props.todo;
        return (
            <div style={this.getParentStyle()} >
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                <p style={this.getChildStyle()} >{this.props.todo.title}</p>
                <p style={this.getChildStyle()} >{this.props.todo.content}</p>
                <button onClick={this.props.markDeleted.bind(this, id)} style={this.getButtonStyle()}>X</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markDeleted: PropTypes.func.isRequired
};

export default TodoItem;

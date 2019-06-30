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
          margin:'1px',
          marginRight: '12px',
          padding: '10px',
          borderRadius: '30%',
          backgroundColor: '#ff7b02',
          right: '1%',
          position: 'absolute'
      }
    };
    
    render() {
        const  { title, id, content } = this.props.todo;
        return (
            <div style={this.getParentStyle()} >
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                <p style={this.getChildStyle()} >{title}</p>
                <p style={this.getChildStyle()} >{content}</p>
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

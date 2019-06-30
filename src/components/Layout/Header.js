import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle()}>
            <h1 style={{ marginBottom: '10px' }}>Todo List</h1>
            <div>
                <Link style={menuStyle()} to='/'>Home</Link>
                <Link style={menuStyle()} to='/about'>About</Link>
            </div>
        </header>
    );
}

const headerStyle = () => {
    return {
        background: '#eeee',
        color: '#4e82ff',
        textAlign: 'center',
        padding: '20px',
        margin: '10px',
        marginBottom: '20px',
        borderRadius:'20px'
    }
};

const menuStyle = () => {
    return {
        padding: '10px',
        backgroundColor: '#4e82ff',
        borderRadius: '10px',
        margin: '10px',
        color: 'white',
        textDecoration: 'none'
    }
};

export default Header;

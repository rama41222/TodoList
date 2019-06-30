import React from 'react';

function Header() {
    return (
        <header style={headerStyle()}>
            <h1>Todo List</h1>
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

export default Header;

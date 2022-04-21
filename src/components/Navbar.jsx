import React from 'react';

import {
    Link
} from 'react-router-dom';


export const Navbar = () => {
    return (<div>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/users'>Users</Link>
        <Link to='/login'>Login</Link>
    </div>);
}
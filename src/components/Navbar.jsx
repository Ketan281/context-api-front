import React from 'react';

import {
    Link
} from 'react-router-dom';


export const Navbar = () => {
    return (<div>
        <Link to='/'>Home</Link>&nbsp&nbsp
        <Link to='/About'>About</Link>&nbsp&nbsp
        <Link to='/contact'>Contact</Link>&nbsp&nbsp
        <Link to='/users'>Users</Link>&nbsp&nbsp
        <Link to='/login'>Login</Link>&nbsp&nbsp
    </div>);
}

import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
const Navbar = ({ name }) => {
    return (
        <div className="navbar bg-primary">
            <ul>
                <li><h3><Link to='/'>Home</Link></h3></li>
                <li><h3><Link to='/shop'>Shop</Link></h3></li>
                <li><h1 className="italic">{name}</h1></li>
                <li><h3><Link to='/cart'>Cart</Link></h3></li>
                <li><h3><Link to='/about'>About</Link></h3></li>
            </ul>
        </div>
    )
}

export default Navbar

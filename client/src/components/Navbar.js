import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
const Navbar = ({ name }) => {

    const url_extension = window.location.pathname.split("/").at(-1);

    return (
        <div className="navbar bg-primary">
            <ul>
                <li><h3><Link to={`/${url_extension}`}>Home</Link></h3></li>
                <li><h3><Link to={`/shop/${url_extension}`}>Shop</Link></h3></li>
                <li><h1 className="italic">{name}</h1></li>
                <li><h3><Link to={`/cart/${url_extension}`}>Cart</Link></h3></li>
                <li><h3><Link to={`/about/${url_extension}`}>About</Link></h3></li>
            </ul>
        </div>
    )
}

export default Navbar

import React from 'react';
import '../../styles/Nav.css';



const Nav = () => {

    return(
        <div className="navigation-container">
            <ul>
                <li><a href='/Information/#/home'>Home</a></li>
                <li><a href='/Information/#/about'>About</a></li>
                <li><a href='/Information/#/photo'>Photo</a></li>
                <li><a href='/Information/#/contact'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;
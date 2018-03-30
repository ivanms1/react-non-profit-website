import React from 'react';
import './App.css';

function NavBar(props) {
        return <div className='navBarContainer'>
            <ul className='navBar'>
                <li><a href="/">Uniskript</a></li>
                <li><a href="/">Teachers</a></li>
                <li><a href="/">Students</a></li>
                <li><a href="/">Donate</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
}

export default NavBar

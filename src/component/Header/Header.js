import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {


    return (
        <nav className='navbar flex justify-between p-3'>
           <h1>Rest Country API</h1>

           <NavLink to= '/'>All Country</NavLink>
           <a href="">Continent</a>
           
           <input type="text" placeholder='Search'/>
           <button className='px-4 py-1 bg-white'>GO</button>
    
        </nav>
    );
};

export default Header;
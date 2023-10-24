import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
const Navbar = (props) => {
 return(
    <>
        <div className='Navbar'>
            <ul>
                <li>
                    <NavLink
                        to='/'
                    >
                        Liftians
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/dashboard'
                    >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
            <div className='NavLogin'>
            <Button className='LoginButton' variant="text">Login</Button>
            </div>
        </div>
    </>
 )
};

export default Navbar;
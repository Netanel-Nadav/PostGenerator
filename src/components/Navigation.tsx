import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser, User } from '../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import Logo from '../assets/imgs/465052_compose_content_script_write_document_icon.svg'

export const Navigation: React.FC = () => {

    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser(null))
    }

    console.log(user);
    
    return (
        <nav className='flex align-center'>
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="flex align-center clean-list g-1 space-between">
                <li><NavLink to='/'>ראשי</NavLink></li>
                {user ? <button onClick={logout}>{user.firstName}</button> : <li><NavLink to='/signup'>התחבר</NavLink></li>}
            </ul>

        </nav >
    )
}

import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='border-b-2'>
            <div className='sm:flex container mx-auto justify-between items-center'>
            <ul className='sm:flex gap-5'>
                <li><NavLink to='/all/' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>All Country</NavLink></li>
                <li><NavLink to='/region/Asia' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>Asian</NavLink></li>
                <li><NavLink to='/region/Africa' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>Africa</NavLink></li>
                <li><NavLink to='/region/Americas' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>Americas</NavLink></li>
                <li><NavLink to='/region/Europe' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>Europe</NavLink></li>
                <li><NavLink to='/region/Oceania' style={({ isActive }) => isActive ? { color: "red" } : { color: "green" }}>Oceania</NavLink></li>
            </ul>
            <div>
                <button className='py-2 px-4 bg-lime-500 my-4 rounded-lg border-2 border-lime-500 text-white font-semibold hover:text-lime-500 hover:bg-white duration-500 ' onClick={() => navigate('/search')}>Search</button>
            </div>
        </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/all/'>All Country</Link>
            <Link to='/region/Asia'>Asian</Link>
            <Link to='/region/Africa'>Africa</Link>
            <Link to='/region/Americas'>Americas</Link>
            <Link to='/region/Europe'>Europe</Link>
            <Link to='/region/Oceania'>Asian</Link>
        </div>
    );
};

export default Header;
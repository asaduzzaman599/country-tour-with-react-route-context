import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Country = ({country:{name}}) => {
    return (
        <div>
            <h3>{name}</h3>
            <Link to={`/all/${name}`}>Detail</Link>
        </div>
    );
};

export default Country;
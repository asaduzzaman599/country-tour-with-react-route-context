import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Country = ({country:{name:{common}}}) => {
    return (
        <div>
            <h3>{common}</h3>
            <Link to={`/all/${common}`}>Detail</Link>
        </div>
    );
};

export default Country;
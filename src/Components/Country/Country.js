import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Country = ({country}) => {
    const {name,continents,flags:{png}} =country;
    const {common} =name;

    return (
        <div>
            <img className='w-80 h-40' src={png} alt="" />
            <h3>{common}</h3>
            <p>{continents[0]}</p>

            <Link to={`/countrys/${common}`}>Detail</Link>
        </div>
    );
};

export default Country;
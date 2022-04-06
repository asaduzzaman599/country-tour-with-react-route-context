import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Country = ({country}) => {
    const {name,continents,flags:{png}} =country;
    const {common} =name;
    console.log(continents)

    return (
        <div className='shadow p-10 d-flex flex-col justify-between'>
            <img className='w-80 h-40' src={png} alt="" />
            <h3>{common}</h3>
            <p>{continents[0]}</p>

            <p><Link to={`/countrys/${common}`} className='inline-block py-2 rounded px-8 bg-lime-600 text-white font-medium mt-2'>Detail</Link></p>
        </div>
    );
};

export default Country;
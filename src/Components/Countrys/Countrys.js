import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Country from '../Country/Country';

const Countrys = () => {
    const [countrys,setCountrys]= useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[])
    return (
        <div>
            <h4>All Countrys: {countrys.length}</h4>
            <Outlet />
            {
                countrys.map(country=> <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Country from '../Country/Country';

const Countrys = () => {
    const [countrys,setCountrys]= useState([]);
    const {name,region} =useParams()

    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/${region||""}/${name}/`        
        fetch(url)
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[name])
    return (
        <div>
            <h4>All Countrys: {countrys.length}</h4>
           {/*  <Outlet /> */}
            {
                countrys.length>0 && countrys.map(country=> <Country key={country.name.common} country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;
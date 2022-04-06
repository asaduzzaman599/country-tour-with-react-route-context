import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { CountryContext } from '../../App';
import Country from '../Country/Country';

const Countrys = () => {
    const [countrys,setCountrys]= useContext(CountryContext);
    const {name,region} =useParams()
    console.log(region)
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/${region||""}/${name}/`        
        fetch(url)
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[name])
    return (
        <div className='mt-8'>
            {
                region && <h3>{name} Region Countrys</h3> 
            }
            <h4>All Countrys: {countrys.length}</h4>
           {/*  <Outlet /> */}
            <div className=' w-4/5 mx-auto grid sm:grid-cols-3 gap-4'>
            {
                countrys.length>0 && countrys.map(country=> <Country key={country.name.common} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countrys;
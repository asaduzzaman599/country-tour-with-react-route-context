import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryContext } from '../../App';

const CountryDetail = () => {/* 
    const [countrys]= useContext(CountryContext); */
    const {name}=useParams()
    const [country,setCountry] = useState({});

    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${name}`;        
        fetch(url)
        .then(res=> res.json())
        .then(data=> setCountry(data[0]))
    },[])
    console.log(name);
    return (
        <div>
            {
                Object.keys(country).length>0 &&
                <h3>Detail of {country.name.common}</h3>}
        </div>
    );
};

export default CountryDetail;
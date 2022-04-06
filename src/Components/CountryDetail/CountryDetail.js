import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryContext } from '../../App';

const CountryDetail = () => {/* 
    const [countrys]= useContext(CountryContext); */
    const { name } = useParams()
    const [country, setCountry] = useState({});

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(e => alert('error'))
    }, [])
    console.log(country);
    return (
        <>
            {
                Object.keys(country).length > 0 &&
                <div className='w-2/4 mx-auto'>
                    <h3 className=' text-2xl font-medium'> Detail of {country.name.common}</h3>
                    <img src={country.flags.png} className='w-2/4 mx-auto my-8' alt="" />
                  <div className='grid sm:grid-cols-2 text-left mx-auto w-2/4'>
                  <p><span className='font-semibold'>Capital:</span>{country.capital[0]}</p>
                    <p><span className='font-semibold'>Region:</span>{country.region}</p>
                    <p><span className='font-semibold'>Indepent:</span>{country.independent}</p>
                    <p><span className='font-semibold'>Populations:</span>{country.population}</p>
                    <p><span className='font-semibold'>Time Zone:</span>{country.timezones[0]}</p>

                  </div>
                  <a href={country.maps.googleMaps} className="py-2 px-6 rounded bg-lime-600 text-white font-semibold inline-block" target="_blank">Map Location</a>
                </div>


            }
        </>
    );
};

export default CountryDetail;
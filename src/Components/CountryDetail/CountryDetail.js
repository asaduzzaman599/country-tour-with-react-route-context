import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
        const {name}=useParams()
    return (
        <div>
            <h3>Detail of {name}</h3>
        </div>
    );
};

export default CountryDetail;
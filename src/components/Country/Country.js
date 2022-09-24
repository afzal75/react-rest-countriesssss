import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, area, region, flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;
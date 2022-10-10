import React from 'react';

const CountryCard = ({country}) => {

    const {name,flags} = country;

    return (
        <div>
            <img className='w-17 h-6' src={flags.svg} alt="" />
            <h1>{name.common}</h1>
        </div>
    );
};

export default CountryCard;
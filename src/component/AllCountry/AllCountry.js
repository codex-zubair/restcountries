import React, { useContext } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { ApiContext } from '../layout/Main';

const AllCountry = () => {

   const [countries] = useContext(ApiContext);


    return (
        <main className='grid grid-cols-3'>
           {countries.map(country=> <CountryCard country={country}></CountryCard>)}
        </main>
    );
};

export default AllCountry;
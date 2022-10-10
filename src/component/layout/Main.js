import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';


// TODO Context API
export const ApiContext = createContext("api");


const Main = () => {


    
    // Adding Countries and set Context
    const [countries, setCountries] = useState([]);
    const countriesData = useLoaderData();

    console.log(countriesData);


    useEffect(()=> {
        setCountries(countriesData);
    },[countriesData])

    return (
        <div>
            <ApiContext.Provider value={[countries, setCountries]}>
                <Header></Header>
                <Outlet></Outlet>
            </ApiContext.Provider>
        </div>
    );
};

export default Main;
import React, { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CountryContext } from '../App';

const Search = () => {
    const navigate = useNavigate()
    const [searchText,setSearchText] = useState();
   

    return (
        <div>
            <div>
            <input type="text" onChange={(e)=>setSearchText(e.target.value)} className='w-2/5 mx-auto border-2 p-1 mt-8' />
            <div><button className='py-2 px-4 bg-lime-500 my-4 rounded-lg border-2 border-lime-500 text-white font-semibold hover:text-lime-500 hover:bg-white duration-500 '  onClick={()=>navigate(searchText)}>Search</button></div>
            </div>
            <Outlet />
        </div>
    );
};

export default Search;
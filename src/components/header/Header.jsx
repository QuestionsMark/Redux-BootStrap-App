import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Search from '../Search';

const Header = () => {


    return ( 
        <header className="header">
            <Nav />
            {/* <Routes>
                <Route path="/users" element={<Search />}/>
                <Route path="/anime" element={<Search />}/>
            </Routes> */}
        </header>
     );
}
 
export default Header;
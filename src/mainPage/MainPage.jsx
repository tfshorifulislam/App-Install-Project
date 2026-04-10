import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainPage = () => {
    return (
        <div className='bg-[#F5F5F5] w-7xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainPage;
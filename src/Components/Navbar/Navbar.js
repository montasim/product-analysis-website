import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap mt-12 p-5 flex-col md:flex-row items-center">
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-6 uppercase font-bold">
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
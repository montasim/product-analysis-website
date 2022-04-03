import React from 'react';

const Navbar = () => {
    return (
        <nav className='mx-4 py-8 flex justify-center gap-4 uppercase font-bold'>
            <a href="/home">Home</a>
            <a href="/reviews">Reviews</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/blogs">Blogs</a>
            <a href="/about">About</a>
        </nav>
    );
};

export default Navbar;
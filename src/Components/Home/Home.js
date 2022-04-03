import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className=''>
            <Header />

            <Reviews />

            <button onClick={() => navigate("/reviews")} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">See All Reviews</button >
        </div>
    );
};

export default Home;
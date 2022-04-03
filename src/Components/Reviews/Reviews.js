import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        <Review />
                    }
                </div>
            </div>
            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">See All Reviews</button>
        </section>
    );
};

export default Reviews;
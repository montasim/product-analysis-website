import React from 'react';

const Review = (props) => {
    const { name, image, rating, review_text } = props?.review;

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 rounded-lg items-center">
                <img className="lg:h-48 md:h-36 w-50 object-cover object-center" src={image} alt="blog" />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                    <p className="leading-relaxed mb-3">{review_text}</p>
                    <p className='title-font'>Rating <span className='text-xl font-bold'>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;
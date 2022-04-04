import React from 'react';

const Review = (props) => {
    const { name, image, rating, review_text } = props?.review;

    return (
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                <p className="leading-relaxed">{review_text}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                <p className="text-gray-500">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';

const Review = () => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
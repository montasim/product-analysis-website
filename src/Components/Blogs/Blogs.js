import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const Blogs = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className='mx-12 my-20'>
            <h2 className='title-font sm:text-3xl text-center text-3xl uppercase mb-4 font-bold text-neutral-600'>Some Questions About React Router</h2>
            <hr />
            <QuestionAnswer />
        </div>
    );
};

export default Blogs;
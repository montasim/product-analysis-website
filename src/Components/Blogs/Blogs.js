import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const Blogs = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className='mx-12'>
            <h2 className='my-12 text-2xl uppercase text-indigo-500'>Some Questions About React Router</h2>
            <QuestionAnswer />
        </div>
    );
};

export default Blogs;
import React from 'react';
import e404 from '../../Assets/Images/404.png';

const NotFound = () => {
    return (
        <section class="mx-12 text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={e404} />
            </div>
        </section>
    );
};

export default NotFound;
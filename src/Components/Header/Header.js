import React from 'react';
import i1 from '../../Assets/Images/1.png';

const Header = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-800">Best TV of 2022</h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-500">Best TV of 2022</h1>
                    <p className="mb-8 leading-relaxed">The Samsung QN90A Neo QLED is the best TV we've reviewed, delivering superb picture quality with its combination of QLED color and mini-LED backlight (the ingredients that make up Neo QLED). Pair that performance with fantastic sound, rich smart features and a stylish design, and you've got the best TV we've reviewed recently. Just be aware that this premium 4K smart TV doesn't come cheap.</p>
                    <div className="flex justify-center">
                        <button onClick={() => window.location.assign("https://www.amazon.in/s?k=Samsung+QN90A+QLED+TV&ascsubtag=tomsguide-row-2595105579065182000-20&geniuslink=true&tag=georiot-in-default-21")} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Buy Now</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={i1} />
                </div>
            </div>
        </section>
    );
};

export default Header;
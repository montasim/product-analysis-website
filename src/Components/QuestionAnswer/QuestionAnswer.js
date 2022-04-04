import React from 'react';

const QuestionAnswer = () => {
    return (
        <section className='mx-12 mt-12'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-6 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is Context API?</h2>
                                <p className="leading-relaxed">Context API is an modern and efficient way to pass data to react child elements. Normally we use props drilling to pass data to lower child. If the child is after 5 parents then we need to pass props to all of these 5 parents to get the data to child. It is quite repeating on same code. Using context API we can simply pass data to any child directly.</p>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is Semantic Tag?</h2>
                                <p className="leading-relaxed">Semantic tag is a way to describe HTML elements to both machine and human. It converts a HTML elements in several parts like header, main, footer, section, article etc. By looking on corresponding tags we can easily understand in which section of a webpage these tag will be used.</p>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Difference between inline vs block vs inline block elements?</h2>
                                <p className="leading-relaxed">An Inline or Inline block element does not starts on a new line. A block elements always starts on a new line. Inline or Inline block elements can be placed side by side. A block elements can not placed side by side. Weight, height or margin can not be set on inline element. We can set width, height or margin to Inline block or block elements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default QuestionAnswer;
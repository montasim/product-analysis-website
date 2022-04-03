import { useContext } from 'react';
import { ReviewContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useContext(ReviewContext);

    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="text-gray-600 body-font">
            <h2 className='my-5 text-3xl uppercase text-center text-gray-800 font-bold'>Hear From Our Happy Customers</h2>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        reviews.map((review, index) => <Review key={index} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;
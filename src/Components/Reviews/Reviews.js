import { useContext } from 'react';
import { ReviewContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useContext(ReviewContext);

    return (
        <section className="text-gray-600 body-font">
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
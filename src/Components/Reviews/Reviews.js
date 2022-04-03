import LoadReviews from '../../Hooks/LoadReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = LoadReviews();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
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
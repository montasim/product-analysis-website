import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewContext } from '../../App';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    const navigate = useNavigate();

    const [reviews] = useContext(ReviewContext);

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className='mx-12 px-4'>
            <Header />

            <h1 className="title-font sm:text-3xl text-center text-3xl uppercase mb-4 font-bold text-grey-800">Customers Review (3)</h1>
            <hr />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            reviews.slice(0, 3).map((review, index) => <Review key={index} review={review} />)
                        }
                    </div>
                </div>
            </section>

            <button onClick={() => navigate("/reviews")} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">See All Reviews</button >
        </div>
    );
};

export default Home;
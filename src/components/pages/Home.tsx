import BooksContainer from '../BooksContainer';
import { useEffect, useState } from 'react';
import { getLatestBooks } from '../../services/my-api';
import ErrorWrapper from '../ui/ErrorWrapper';
import LoadingAnimation from '../ui/LoadingAnimation';
import { Link } from 'react-router-dom';

const Home = () => {
    const numberOfBooksToLoad: number = 9;
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const booksData = await getLatestBooks(numberOfBooksToLoad);
                console.log('YOUR BOOKS from home.jsx:', booksData);
                setBooks(booksData);
            } catch (error) {
                setError(error.message);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="h-full">
            <div id="subNav" className="w-full flex justify-end">
                <Link
                    to={'/seller-area'}
                    className="-mt-1 mr-1/2 hover:bg-[#5450d4] rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    To Seller Area?
                </Link>
            </div>
            <LoadingAnimation loading={loading} />
            {error && <ErrorWrapper errorMsg={error} />}
            {!loading && books && books.length > 0 && (
                <BooksContainer books={books} limit={numberOfBooksToLoad} />
            )}
        </div>
    );
};

export default Home;

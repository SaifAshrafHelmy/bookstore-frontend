import { useEffect, useState } from 'react';
import { addBook } from '../../services/my-api';
import ErrorWrapper from '../ui/ErrorWrapper';
import { useCookies } from 'react-cookie';
import BookForm from '../BookForm';
import { Book } from '../../types/book';
import SuccessWrapper from '../ui/SuccessWrapper';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const SellerArea = () => {
    // const [book, setBook] = useState({ id: '', title: '' });
    const [bookData, setBookData] = useState<Book>({
        title: '',
        author: '',
        category: '',
        price: '',
        stock_quantity: '',
        cover_image: '',
    });
    const [error, setError] = useState<any | null>(null);
    const [success, setSuccess] = useState(false);
    const [cookies, setCookie] = useCookies(['access_token', 'user']);

    const sendBookData = async (book) => {
        setError(null);
        try {
            const addedBook = await addBook(book, cookies);
            // setBook(addedBook);
            setSuccess(true);
            console.log('YOUR BOOK is:', addedBook);
        } catch (error) {
            setError(error.message);
            setSuccess(true);
            setSuccess(false);

            console.log(error.message);
        }
    };
    // const bookData = {
    //     title: 'The most recent book ever',
    //     author: 'Jane Austin',
    //     category: 'Novel',
    //     price: '60',
    //     stock_quantity: '100',
    //     cover_image: 'www.test-image.com',
    // };

    return (
        <>
            {error && <ErrorWrapper errorMsg={error} />}
            {!success && (
                <BookForm
                    bookData={bookData}
                    setBookData={setBookData}
                    sendBookData={sendBookData}
                />
            )}
            {success && (
                <SuccessWrapper
                    successMsg={`The book ${bookData.title} was added successfully.`}
                />
            )}
        </>
    );
};

export default SellerArea;

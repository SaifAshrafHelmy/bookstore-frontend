import bookIcon from '../assets/book_icon.svg';
import BookCard from './BookCard';

const BooksContainer = ({ books, limit }) => {
    return (
        <div className="w-full px-24 py-3 my-5 ">
            <h2 className="text-4xl">Best Sellers</h2>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-10 p-3 my-3 border-2 border-gray-100">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        description={book.description}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BooksContainer;

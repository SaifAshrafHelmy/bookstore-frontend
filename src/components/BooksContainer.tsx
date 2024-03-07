import BookCard from './BookCard';

const BooksContainer = ({
    books,
    limit = 6,
}: {
    books: any[];
    limit: number;
}) => {
    const booksToShow = books.slice(0, limit);
    if (!booksToShow || booksToShow.length === 0)
        return (
            <div className="w-full px-24 py-3 my-5 text-3xl ">
                No books to show yet.
            </div>
        );

    return (
        <div className="w-full px-24 py-3 my-5 ">
            <h2 className="text-4xl">Latest Books</h2>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-10 p-3 my-3 border-2 border-gray-100 ">
                {booksToShow.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        description={book.description}
                        image={book.cover_image}
                        category={book.category}
                        price={book.price}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BooksContainer;

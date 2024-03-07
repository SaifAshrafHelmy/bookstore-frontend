import { ChangeEvent, FormEvent } from 'react';
import { Book } from '../types/book';

const BookForm = ({
    bookData,
    setBookData,
    sendBookData,
}: {
    bookData: Book;
    setBookData: (book: Book) => void;
    sendBookData: (book: Book) => void;
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBookData({
            ...bookData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendBookData(bookData);
    };
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <h2 className="mb-8 text-2xl">Add a new book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="title"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.title}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="author"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Author"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.author}
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="category"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Author"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.category}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.price}
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="stock_quantity"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                name="stock_quantity"
                                id="stock_quantity"
                                placeholder="Stock"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.stock_quantity}
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="cover_image"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Cover Image
                            </label>
                            <input
                                type="text"
                                name="cover_image"
                                id="cover_image"
                                placeholder="Cover Image"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                                value={bookData.cover_image}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="hover:shadow-htmlForm w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookForm;

import axios from 'axios';
import { useCookies } from 'react-cookie';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export async function getLatestBooks(numberOfBooks: number) {
    const config = {
        method: 'get',
        url: `${SERVER_URL}/books?limit=${numberOfBooks}`,
    };

    try {
        const res = await axios.request(config);
        const books = res.data;
        console.log('Here are the books from my-api:', books);

        return books;
    } catch (error) {
        console.log(error);
        throw new Error('Could not load books from the server');
    }
}

export async function addBook(bookData, cookies) {
    if (!cookies.access_token || !cookies.user) {
        throw new Error("You're not logged in");
    }
    if (cookies.user.role != 'seller') {
        throw new Error('Customers are not allowed to add new books for sale');
    }

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${SERVER_URL}/books`,
        headers: {
            Authorization: `Bearer ${cookies.access_token}`,
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(bookData),
    };

    try {
        const res = await axios.request(config);
        const book = res.data;
        console.log('Here are the newly added book from the api', book);

        return book;
    } catch (error) {
        console.log(error);
        throw new Error('Server failed to add the new book.');
    }
}

// const data = await getLatestBooks(10);
// console.log('------------HELLO-----------------------');
// console.log(data);

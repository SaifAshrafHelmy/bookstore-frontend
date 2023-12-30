import BooksContainer from '../BooksContainer';
import { books } from '../../utils/books_seeder';

const Home = () => {
    return <BooksContainer books={books} limit={6} />;
};

export default Home;

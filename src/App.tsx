import BooksContainer from './components/BooksContainer';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
const books = [
    { id: 1, title: 'book1', description: 'the best book ever' },
    { id: 2, title: 'book2', description: 'the best book ever' },
    { id: 3, title: 'book3', description: 'the best book ever' },
    { id: 4, title: 'book4', description: 'the best book ever' },
    { id: 5, title: 'book5', description: 'the best book ever' },
    { id: 6, title: 'book6', description: 'the best book ever' },
];

function App() {
    return (
        <div className="container w-[100%] h-screen mx-auto">
            <Header />
            <BooksContainer books={books} limit={10} />
            <Footer />
        </div>
    );
}

export default App;

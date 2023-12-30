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
    { id: 7, title: 'book7', description: 'the best book ever' },
    { id: 8, title: 'book8', description: 'the best book ever' },
    { id: 9, title: 'book9', description: 'the best book ever' },
    { id: 10, title: 'book10', description: 'the best book ever' },
    { id: 11, title: 'book11', description: 'the best book ever' },
    { id: 12, title: 'book12', description: 'the best book ever' },
];

function App() {
    return (
        <div className="container w-[100%] min-h-screen mx-auto flex flex-col justify-between">
            <Header />
            <div className="content ">
                <BooksContainer books={books} limit={6} />
            </div>
            <Footer />
        </div>
    );
}

export default App;

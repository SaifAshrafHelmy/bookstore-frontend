import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

function App() {
    return (
        <div className="container w-[100%] min-h-screen mx-auto flex flex-col justify-between">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/books" element={<div>Hello from books!</div>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

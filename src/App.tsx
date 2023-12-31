import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Register from './components/pages/Register';
import Ribbon from './components/ui/Ribbon';



function App() {
    return (
        <div className="container w-[100%] min-h-screen mx-auto flex flex-col gap-0 justify-between">
            <Header />
            <div className="page-content h-full">
                <Ribbon />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/books"
                        element={<div>Hello from books!</div>}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

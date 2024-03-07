import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MyAccount from './components/pages/MyAccount';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Register from './components/pages/Register';
import Ribbon from './components/ui/Ribbon';
import SellerArea from './components/pages/SellerArea';

function App() {
    return (
        <div className="container w-[100%] min-h-screen mx-auto flex flex-col gap-0 justify-between">
            <Header />
            <div className="page-content h-full mb-auto">
                <Ribbon />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/myaccount" element={<MyAccount />} />
                    <Route path="/logout" element={<MyAccount />} />
                    <Route
                        path="/books"
                        element={<div>Hello from books!</div>}
                    />
                    <Route path="/seller-area" element={<SellerArea />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

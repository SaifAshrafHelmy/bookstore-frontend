import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const showPopUp = (status) => {
    console.log('showing popup.......');
    if (status == 'SUCCESS') {
        Swal.fire({
            icon: 'success',
            title: 'Logged in successfully, redirecting...',
            showConfirmButton: false,
            timer: 2000, // Automatically close after 2 seconds
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Failed to login',
            showConfirmButton: false,
            timer: 2000, // Automatically close after 2 seconds
        });
    }
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const parsedLoginData = JSON.stringify({ email, password });
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${SERVER_URL}/users/login`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: parsedLoginData,
            });
            const data = await response.json();
            if (response.status >= 200 && response.status < 300) {
                console.log('ALL is OKAY', `status is ${response.status}`);
                if (!data.access_token) {
                    console.log('NO ACCESS TOKEN ISSUED');
                    console.log(data);
                    setIsError(true);
                    showPopUp('ERROR');
                    return;
                }
                setIsSuccess(true);
                console.log(data.access_token);
                showPopUp('SUCCESS');
            } else {
                setIsError(true);
                console.log('ERROR: ', data.status, data.message);
                showPopUp('ERROR');
            }
        } catch (e) {
            setIsError(true);
            showPopUp('ERROR');

            console.error(
                '--- ERROR CONNECTING TO SERVER, PLEASE CHECK YOUR CONNECTION OR IF THE SERVER IS UP ---'
            );
            console.log('ERROR DETAILS: ', e);
        }
    };
    return (
        <div className="flex flex-col items-center mb-4">
            <h2 className="w-full bg-headers-background text-4xl text-center py-12 uppercase mb-5">
                Login
            </h2>
            <form
                onSubmit={(e) => handleLogin(e)}
                className="w-1/2 md:w-1/4 flex flex-col items-center gap-4 justify-start pt-4 mb-4"
                autoComplete="on"
            >
                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete="on"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="on"
                    />
                </div>

                <button className="bg-green1 hover:bg-green-light text-white font-bold py-3 px-8 mt-4 rounded">
                    Login
                </button>
            </form>
            <div>
                <Link to="/register" className="mx-2 ">
                    Don't have an account? Register Here
                </Link>
            </div>
        </div>
    );
};

export default Login;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

import { useCookies } from 'react-cookie';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Register = () => {
    const [role, setRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const parsedRegisterData = JSON.stringify({
        role,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
    });
    const [cookies, setCookie] = useCookies(['access_token', 'user']);

    // const signIn = useSignIn();
    const navigate = useNavigate();

    const showPopUp = (status: string, message?: string) => {
        console.log('showing popup.......');
        if (status == 'SUCCESS') {
            MySwal.fire({
                icon: 'success',
                title: 'Registered in successfully, redirecting...',
                showConfirmButton: false,
                timer: 2000, // Automatically close after 2 seconds
                didOpen: () => {
                    MySwal.showLoading();
                },
            }).then(() => navigate('/'));
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Failed to register',
                text: message,
                showConfirmButton: false,
                timer: 2000, // Automatically close after 2 seconds
            });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${SERVER_URL}/users/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: parsedRegisterData,
            });
            const data = await response.json();
            if (response.status >= 200 && response.status < 300) {
                console.log('ALL is OKAY', `status is ${response.status}`);

                if (!data.access_token) {
                    console.log('NO ACCESS TOKEN ISSUED');
                    console.log(data);
                    showPopUp('ERROR', 'Could not get access');
                    return;
                }
                console.log(data.access_token);

                setCookie('access_token', data.access_token, { path: '/' });

                const userData = await fetch(`${SERVER_URL}/users/profile`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${data.access_token}`,
                    },
                });
                const parsedUserData = await userData.json();
                if (!parsedUserData) {
                    console.log('NO ACCESS TOKEN ISSUED');
                    showPopUp('ERROR', 'Could not get user data');
                    return;
                }
                console.log(parsedUserData);
                parsedUserData.first_name =
                    parsedUserData.first_name.charAt(0).toUpperCase() +
                    parsedUserData.first_name.slice(1);
                parsedUserData.last_name =
                    parsedUserData.last_name.charAt(0).toUpperCase() +
                    parsedUserData.last_name.slice(1);
                setCookie('user', parsedUserData, { path: '/' });

                showPopUp('SUCCESS');
            } else {
                console.log('ERROR: ', data.status, data.message);
                showPopUp('ERROR', data.message);
            }
        } catch (e) {
            showPopUp('ERROR', 'Could not connect to server.');

            console.error(
                '--- ERROR CONNECTING TO SERVER, PLEASE CHECK YOUR CONNECTION OR IF THE SERVER IS UP ---'
            );
            console.log('ERROR DETAILS: ', e);
        }
    };
    return (
        <div className="flex flex-col items-center mb-4">
            <h2 className="w-full bg-headers-background text-4xl text-center py-12 uppercase mb-5">
                Register
            </h2>
            <form
                method="POST"
                className="w-1/2 md:w-1/4 flex flex-col items-center gap-4 justify-start pt-4 mb-4"
            >
                <div className="w-full">
                    <label htmlFor="role">Register as a:</label>

                    <select
                        name="role"
                        id="role"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="customer" defaultChecked>
                            Customer
                        </option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        autoComplete="on"
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        autoComplete="on"
                    />
                </div>
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
                        autoComplete="new-password"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        className="w-full border-2 outline-none py-2 px-4"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        autoComplete="on"
                    />
                </div>

                <button
                    onClick={handleRegister}
                    className="bg-green1 hover:bg-green-light text-white font-bold py-3 px-8 mt-4  rounded"
                >
                    Register
                </button>
            </form>
            <div>
                <Link to="/login" className="mx-2 ">
                    Already have an account? Login Here
                </Link>
            </div>
        </div>
    );
};

export default Register;

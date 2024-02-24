import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const MyAccount = () => {
    const [cookies, , removeCookie] = useCookies(['access_token', 'user']);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeCookie('access_token');
        removeCookie('user');
        MySwal.fire({
            icon: 'success',
            title: 'Logged out successfully, redirecting...',
            showConfirmButton: false,
            timer: 2000, // Automatically close after 2 seconds
            didOpen: () => {
                MySwal.showLoading();
            },
        }).then(() => navigate('/login'));
    };
    if (!cookies.user) {
        return (
            <div className="flex flex-col justify-center items-center h-[65vh] ">
                <div className="block">You're not logged in.</div>
                <Link to="/login" className="block font-bold">
                    <li className=" border-gray-100  flex gap-1">Login?</li>
                </Link>
            </div>
        );
    }
    const user = cookies.user;

    return (
        <div className="flex flex-col items-center mb-4">
            <h2 className="w-full bg-headers-background text-4xl text-center py-12 uppercase mb-5">
                My Account
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="divide-y divide-gray-300">
                    <div className="py-2">
                        <span className="font-semibold">ID:</span> {user.id}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Role:</span> {user.role}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Email:</span>{' '}
                        {user.email}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">First Name:</span>{' '}
                        {user.first_name}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Last Name:</span>{' '}
                        {user.last_name}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Profile Picture:</span>{' '}
                        {user.profile_picture}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Address:</span>{' '}
                        {user.address}
                    </div>
                    <div className="py-2">
                        <span className="font-semibold">Phone Number:</span>{' '}
                        {user.phone_number}
                    </div>
                </div>
            </div>

            <button
                className="bg-red-500 hover:bg-green-light text-white font-bold py-3 px-8 mt-3 rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default MyAccount;

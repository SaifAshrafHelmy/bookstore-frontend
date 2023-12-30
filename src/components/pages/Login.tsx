import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col items-center mb-4">
            <h2 className="w-full bg-headers-background text-4xl text-center py-12 uppercase mb-5">
                Login
            </h2>
            <form
                method="POST"
                className="w-1/2 md:w-1/4 flex flex-col items-center gap-4 justify-start pt-4 mb-4"
            >
                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="w-full border-2 outline-none py-2 px-4"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border-2 outline-none py-2 px-4"
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

const Footer = () => {
    return (
        <div className="w-full p-4 text-center bg-green1 text-white flex flex-row gap-5 justify-between text-sm md:text-base md:px-24 ">
            <div>
                <p>&copy; 2024 BookBite Bookstore. All Rights Reserved.</p>
            </div>
            <ul className="flex gap-4">
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Terms Of Service</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;

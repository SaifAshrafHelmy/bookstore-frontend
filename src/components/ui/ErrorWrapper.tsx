const ErrorWrapper = ({ errorMsg }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="mx-5 my-10 p-6 rounded-lg bg-red-100 text-red-700 border border-red-300 flex flex-col items-center justify-center w-1/2">
                <p className="font-bold text-lg">Error</p>
                {errorMsg && <p>{errorMsg}</p>}
            </div>
        </div>
    );
};

export default ErrorWrapper;

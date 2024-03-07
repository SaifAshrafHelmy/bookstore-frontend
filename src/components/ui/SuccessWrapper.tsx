const SuccessWrapper = ({ successMsg }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="mx-5 my-10 p-6 rounded-lg bg-red-100 green-red-700 border border-green-300 flex flex-col items-center justify-center w-1/2">
                <p className="font-bold text-lg">Success</p>
                {successMsg && <p>{successMsg}</p>}
            </div>
        </div>
    );
};

export default SuccessWrapper;

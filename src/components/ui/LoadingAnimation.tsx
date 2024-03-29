import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
    display: 'block',
    margin: '2rem auto',
    borderColor: 'green',
};

function LoadingAnimation({ loading }) {
    let [color, setColor] = useState('#ffffff');

    return (
        <div className="sweet-loading">
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoadingAnimation;

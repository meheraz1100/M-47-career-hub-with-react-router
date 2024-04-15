import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPAge = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <button><Link to="/">Go Back</Link></button>
        </div>
    );
};

export default ErrorPAge;
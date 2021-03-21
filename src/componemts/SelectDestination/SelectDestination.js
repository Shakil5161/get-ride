import React from 'react';
import { Link } from 'react-router-dom';

const SelectDestination = () => {
    return (
        <div className="container">
            <h4 className="mt-5">Select Vehicle From <Link to="/">Here</Link></h4> 
        </div>
    );
};

export default SelectDestination;
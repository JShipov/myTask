import React from 'react';

export const Rectangle = () => {
    return (
        <div className="row d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-center align-items-center">
            <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/PNGforRectangle.png')} alt="rectangle-image"/>
            <div><p>Search for freelancers</p></div>
            </div>
        </div>
    );
};

export default Rectangle;
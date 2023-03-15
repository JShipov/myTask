import React from 'react';

export const Square = () => {
    return (
        <div className="square">
            <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/PNGforSquare.png')} alt="square-image"/>
            <div>
                <h6>User Friendly</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Nibh bibendum.</p></div>
        </div>
    );
};

export default Square;
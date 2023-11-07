import React from 'react';
import '../Hat/hatstyle.scss';
import { Link, useNavigate } from 'react-router-dom';

function Hat() {
    const navigate = useNavigate();

    const handleCalculationsClick = (event) => {
        event.preventDefault();
        alert("Сначала выберите значение");
    };

    return (
        <div className='hat_style'>
            <div className="hat">
                <Link to="/">HOME</Link>
                <a href="/Calculations" onClick={handleCalculationsClick}>CALCULATIONS</a>
            </div>
        </div>
    );
}

export default Hat;

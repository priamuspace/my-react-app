import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hat from '../Hat/Hat';
import '../Home/homestyle.scss';

const valArr = [20, 40, 60];

function Home() {
    const [value, setValue] = useState(20);

    const handleChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Calculations Game | Home</title>
            </Helmet>
            <div className='home'>
                <Hat />
                <h1>Выберите диапазон от 20 до 60</h1>
                <select value={value} onChange={handleChange}>

                    {valArr.map((val) => (<option value={val}>{val}</option>))}
                </select>
                <div className="text-box">
                    <Link to={`/Calculations/${value}`} className="btn btn-white btn-animate">START</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;

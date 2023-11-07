import React from 'react';
import { Helmet } from 'react-helmet';
import '../Calc/calculationsstyle.scss';
import Hat from '../Hat/Hat';
import { useParams } from 'react-router-dom';

function getRandomArithmeticExpression() {
    const number1 = Math.floor(Math.random() * 10); 
    const number2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', '*', '/']; 
    const randomOperator = operators[Math.floor(Math.random() * operators.length)]; 

    return `${number1} ${randomOperator} ${number2} = `;
}

function Calculations() {
    const { value } = useParams();

    const valueAsNumber = parseInt(value);

    const calcBlocks = Array.from({ length: valueAsNumber }, (_, index) => (
        <div className="Calc_block" key={index}>
            <p>{getRandomArithmeticExpression()}</p>
            <input type="text" placeholder="" />
        </div>
    ));

    return (
        <React.Fragment>
            <Helmet>
                <title>Calculations Game | Calculations</title>
            </Helmet>
            <div className="calc_style">
                <Hat />
                <div className="calc_blocks">
                    {calcBlocks}
                </div>
                <p>Из HOME - {value}</p>
                <h3>Завершено 5/{value}</h3>
            </div>
        </React.Fragment>
    );
}

export default Calculations;

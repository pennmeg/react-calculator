import React, { useState }  from 'react';
import styled from 'styled-components'
import './styles.css';
import CalculatorView from './calculatorView';

const Button = styled.button`
  height: 70px;
  min-width: 70px;
  color: white;
  border: 1px solid #5c5c5c;
  font-size: 24px;
  font-weight: bold;
  background-color: ${props => props.backgroundColor};

  :disabled {
    color: black;
  }
`;

const regex = /([*+/-])/;

function Calculator() {
  const [displayTotal, setDisplayTotal] = useState('');
  const [total, setTotal] = useState('');

  const buttonClick = (value) => {
    switch(value) {
      case '=':
        determineTotal();
        break;
      default:
        setDisplayTotal(displayTotal + value);
        setTotal(displayTotal);
    }
  };

  const determineTotal = () => {
    const totalArry = total.split(regex);
    console.log(totalArry);
  };

  return (
    <div className='calculator'>
      <CalculatorView total={displayTotal} />
      <div className='buttonContainer'>
        <Button onClick={() => buttonClick("Clear")} backgroundColor="#696969">C</Button>
        <Button disabled backgroundColor="#696969">+/-</Button>
        <Button disabled backgroundColor="#696969">%</Button>
        <Button onClick={() => buttonClick("/")} backgroundColor="#FFA500">/</Button>
        <Button onClick={() => buttonClick("7")} backgroundColor="#808080">7</Button>
        <Button onClick={() => buttonClick("8")} backgroundColor="#808080">8</Button>
        <Button onClick={() => buttonClick("9")} backgroundColor="#808080">9</Button>
        <Button onClick={() => buttonClick("*")} backgroundColor="#FFA500">x</Button>
        <Button onClick={() => buttonClick("4")} backgroundColor="#808080">4</Button>
        <Button onClick={() => buttonClick("5")} backgroundColor="#808080">5</Button>
        <Button onClick={() => buttonClick("6")} backgroundColor="#808080">6</Button>
        <Button onClick={() => buttonClick("-")} backgroundColor="#FFA500">-</Button>
        <Button onClick={() => buttonClick("1")} backgroundColor="#808080">1</Button>
        <Button onClick={() => buttonClick("2")} backgroundColor="#808080">2</Button>
        <Button onClick={() => buttonClick("3")} backgroundColor="#808080">3</Button>
        <Button onClick={() => buttonClick("+")} backgroundColor="#FFA500">+</Button>
        <Button onClick={() => buttonClick("0")} backgroundColor="#808080"className='zero'>0</Button>
        <Button disabled backgroundColor="#808080">.</Button>
        <Button onClick={() => buttonClick("=")} backgroundColor="#FFA500">=</Button>
      </div>
    </div>
  );
}

export default Calculator;

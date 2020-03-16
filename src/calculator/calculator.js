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
`;

function Calculator() {
  const [total, setTotal] = useState('');

  return (
    <div className='calculator'>
      <CalculatorView total={total} />
      <div className='buttonContainer'>
        <Button backgroundColor="#696969">C</Button>
        <Button backgroundColor="#696969">+/-</Button>
        <Button backgroundColor="#696969">%</Button>
        <Button backgroundColor="#FFA500">/</Button>
        <Button backgroundColor="#808080">7</Button>
        <Button backgroundColor="#808080">8</Button>
        <Button backgroundColor="#808080">9</Button>
        <Button backgroundColor="#FFA500">x</Button>
        <Button backgroundColor="#808080">4</Button>
        <Button backgroundColor="#808080">5</Button>
        <Button backgroundColor="#808080">6</Button>
        <Button backgroundColor="#FFA500">-</Button>
        <Button backgroundColor="#808080">1</Button>
        <Button backgroundColor="#808080">2</Button>
        <Button backgroundColor="#808080">3</Button>
        <Button backgroundColor="#FFA500">+</Button>
        <Button backgroundColor="#808080"className='zero'>0</Button>
        <Button backgroundColor="#808080">.</Button>
        <Button backgroundColor="#FFA500">=</Button>
      </div>
    </div>
  );
}

export default Calculator;

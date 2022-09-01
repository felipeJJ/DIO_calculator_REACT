import {Container, Content, Row} from './styles';

import Input from './components/Input/';
import Button from './components/Button/';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNuber, setFirstNuber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNuber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  
  const handleSumNumbers = () =>{
    if (firstNuber === '0'){
      setFirstNuber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }
    else {
      const sum = Number(firstNuber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }  
  }

  const handleMinusNumbers = () =>{
    if (firstNuber === '0'){
      setFirstNuber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }
    else {
      const minus = Number(firstNuber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }  
  }

  const handleTimesNumbers = () =>{
    if (firstNuber === '0'){
      setFirstNuber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }
    else {
      const times = Number(firstNuber) * Number(currentNumber);
      setCurrentNumber(String(times))
      setOperation('')
    } 

  }
  const handleSquareNumbers = () =>{
    if (firstNuber === '0'){
      setFirstNuber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }
    else {
      const square = Number(firstNuber) / Number(currentNumber);
      setCurrentNumber(String(square))
      setOperation('')
    }  
  }

  const handleEquals = () =>{
    if (firstNuber !== '0' && operation !== '' && currentNumber!== '0'){
      switch(operation){
        case '+': handleSumNumbers();
        break;
        case '-': handleMinusNumbers();
        break;
        case '*': handleTimesNumbers();
        break;
        case '/': handleSquareNumbers();
        break;
        default: 
        break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
         <Button label="/" onClick={handleSquareNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddNumber('7')}/>
          <Button label="8" onClick={()=>handleAddNumber('8')}/>
          <Button label="9" onClick={()=>handleAddNumber('9')}/>
          <Button label="*" onClick={handleTimesNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddNumber('4')}/>
          <Button label="5" onClick={()=>handleAddNumber('5')}/>
          <Button label="6" onClick={()=>handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleAddNumber('1')}/>
          <Button label="2" onClick={()=>handleAddNumber('2')}/>
          <Button label="3" onClick={()=>handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="" onClick={()=>handleAddNumber()}/>
          <Button label="0" onClick={()=>handleAddNumber('0')}/>
          <Button label="" onClick={()=>handleAddNumber('')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

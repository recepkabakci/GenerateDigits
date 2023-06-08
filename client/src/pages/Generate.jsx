import React from 'react';
import styled from 'styled-components';
import  { useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CodeBox = styled.div`
  width: 30px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  background-color: red;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

function Display({ code }) {
  return (
    <CodeContainer>
      {code.split('').map((digit, index) => (
        <CodeBox key={index}>{digit}</CodeBox>
      ))}
    </CodeContainer>
  );
}

function App() {
  const [length, setLength] = useState(4);
  const [code, setCode] = useState('----');

  

  const generateRandomNumber = () => {
    fetch(`http://localhost:4000/randomnumber?length=${length}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    if (length === 4) {
      setLength(5);
    } else if (length === 5) {
      setLength(6);
    } else {
      setLength(4);
    }
    generateRandomNumber();
  };

  return (
    <Container>
      <div ><h1>Random code:</h1></div>
      <Display code={code} />
      <ButtonContainer>
        <Button onClick={handleClick}>Generate <span>{length}</span> random digits</Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;

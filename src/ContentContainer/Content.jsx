import React from 'react';
import styled from 'styled-components'

export default props => {
  
  const onDecrease = event => {
    props.countDecrease();
  };

  const onIncrease = event => {
    props.countIncrease();
  };

  const onReset = event => {
    props.countReset();
  };

  return (
    <Modal>

      <H2>Example React Extension</H2>
      
      <H3>Count: {props.count}</H3>

      <Button first onClick={onDecrease}>Decrease</Button>
      <Button medium onClick={onIncrease}>Increase</Button>
      <Button big onClick={onReset}>Reset</Button>

    </Modal>
  );
}


// Styling
const Modal = styled.div`
  background: #999;
  border: 10px solid #333;
  border-radius: 10px;
  width: 350px;
  height: 200px;
  position: fixed;
  right: 20px;
  padding: 10px;
}
`
const H2 = styled.h2`font-size: 1.5em; text-align:center`
const H3 = styled.h3`font-size: 1.2em; text-align:center`

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: ${props => props.big ? '1.6em' : props.medium ? '1.3em' : '1em'};
  padding: ${props => props.big ? '0.6em 0.8em' : props.medium ? '0.4em 0.6em' : '0.2em 0.6em'};
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: ${props => props.first ? '0' : '0.5em'};
`

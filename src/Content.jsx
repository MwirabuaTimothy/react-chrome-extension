import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { countReset, countIncrease, countDecrease } from './countReducer'
import { bindActionCreators } from 'redux'

const Content = props => {
  
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

      <h1>Example React Extension</h1>
      
      <h2>Count: {props.count}</h2>

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
  width: 300px;
  height: 120px;
  position: fixed;
  right: 20px;
  padding: 10px;
}
`
const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: ${props => props.big ? '1.6em' : props.medium ? '1.3em' : '1em'};
  padding: ${props => props.big ? '0.6em 0.8em' : props.medium ? '0.4em 0.6em' : '0.2em 0.6em'};
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: ${props => props.first ? '0' : '0.5em'};
`


const mapStateToProps = (state) => {
  return {
    count: state.count || 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countReset, countIncrease, countDecrease }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
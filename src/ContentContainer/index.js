import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { Store } from 'webext-redux'
import { PORT, ID } from '../constants'
import { countReset, countIncrease, countDecrease } from '../countReducer'
import Content from './Content.jsx'


const mapStateToProps = (state) => {
  return {
    count: state.count || 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countReset, countIncrease, countDecrease }, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Content)

export const proxyStore = new Store({
  portName: PORT,
  extensionId: ID
})

export function showContentUI(){
  const injectedDOM = document.createElement('div')
  injectedDOM.id = 'react-chrome-extension'
  document.body.appendChild(injectedDOM)

  render(
    <Provider store={proxyStore}>      
      <ConnectedApp />
    </Provider>, injectedDOM
  )
}

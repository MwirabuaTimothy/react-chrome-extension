import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'webext-redux'
import Content from './Content.jsx'


const store = new Store({ 
  portName: 'example' 
})

// Wait for the store to connect to the background page
// The store implements the same interface as Redux's store
store.ready().then(() =>{
  window.addEventListener('load', loadContentScript)
})

function loadContentScript(){

  const injectedDOM = document.createElement('div')
  injectedDOM.id = 'example-react-chrome-extension'
  document.body.appendChild(injectedDOM)

  render(
    <Provider store={store}>
      <Content/>
    </Provider>
    , injectedDOM
  )
}

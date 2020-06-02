import { proxyStore, showContentUI } from './Content.jsx'

// Wait for the store to connect to the background page
// The store implements the same interface as Redux's store
proxyStore.ready().then(() =>{
  window.addEventListener('load', showContentUI)
})
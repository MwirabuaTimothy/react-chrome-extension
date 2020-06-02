import { proxyStore, showContentUI } from './ContentContainer'

// Wait for the store to connect to the background page
// The store implements the same interface as Redux's store
// proxyStore.ready().then(() =>{
  window.addEventListener('load', showContentUI)
// })
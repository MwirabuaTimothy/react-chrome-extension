import { wrapStore } from 'webext-redux';
import { initializeStore } from './store';

export const store = initializeStore();

wrapStore(store);
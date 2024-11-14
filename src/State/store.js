import { createStore } from 'redux';
import { thunk } from 'redux-thunk'; // asynchronous functions ko execute krna mai kam ata hai +
import reducers from './reducers';
import { applyMiddleware } from 'redux';

export const store = createStore(reducers,{},applyMiddleware(thunk)) //{}-initial state
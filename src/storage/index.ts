import { ApplicationState } from './../global/types';
import { createStore, Store } from 'redux'
import rootReducer from './ducks/rootReducer'

const store: Store<ApplicationState> = createStore(rootReducer)

export default store;
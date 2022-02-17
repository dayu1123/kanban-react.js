import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import todosReducer from './reducers/TodosReducer'

const reducer = combineReducers({
  userReducer,
  todosReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
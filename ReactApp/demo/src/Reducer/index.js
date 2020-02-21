import { combineReducers } from 'redux';
import Theater from './ReducerTheater/ReducerTheater'
import Movie from './ReducerMovie/ReducerMovie'


export default combineReducers({ Theater,Movie })
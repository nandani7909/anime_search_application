import { combineReducers } from 'redux'
import animesReducer from '../../pages/animes/animesReducer';

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description rootReducer which combaines all react-application Reducer.
 * @param       
 * @response      
**/

export const rootReducer = combineReducers({
  animes: animesReducer,
})
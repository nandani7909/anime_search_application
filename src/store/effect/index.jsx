import { all, fork } from 'redux-saga/effects';
import animesSaga from '../../pages/animes/animesSaga';

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description rootSaga function which contains all react-application saga.
 * @param       
 * @response      
**/

export function* rootSaga() {
  yield all([
    fork(animesSaga),
  ]);
}
import { put, takeLatest, fork, call } from "redux-saga/effects";
import { ActionTypes } from "./animesActions";
import { getRequestAPI } from "../../global/api";

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description animes Saga and handling API response.
 * @param       animes Request paylod
 * @response    animes response is success or fail.
 **/

function* animesSearchSaga(action) {
  try {
    const { page, limit, status, type, q, sort } = action.payload;
    const response = yield call(getRequestAPI, {
      url: "v4/anime",
      params: { page, limit, status, type, q, sort },
    });
    if (response?.data) {
      yield put({
        type: ActionTypes.GET_ANIMES_SEARCH_SUCCESS,
        data: response.data,
      });
    } else {
      yield put({
        type: ActionTypes.GET_ANIMES_SEARCH_FAILURE,
        error: response.data,
      });
    }
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ANIMES_SEARCH_FAILURE,
      error: err?.response?.data,
    });
  }
}

function* watchAnimesSaga() {
  yield takeLatest(ActionTypes.GET_ANIMES_SEARCH_REQUEST, animesSearchSaga);
}

function* animesSaga() {
  yield fork(watchAnimesSaga);
}

export default animesSaga;

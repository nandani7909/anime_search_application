/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description ActionTypes and ActionCreator Functions for Animes.
 */

export const ActionTypes = {
  GET_ANIMES_SEARCH_REQUEST: 'GET_ANIMES_SEARCH_REQUEST',
  GET_ANIMES_SEARCH_SUCCESS: 'GET_ANIMES_SEARCH_SUCCESS',
  GET_ANIMES_SEARCH_FAILURE: 'GET_ANIMES_SEARCH_FAILURE',
};

export const animesSearchReq = (searchdata) => {
  return {
    type: ActionTypes.GET_ANIMES_SEARCH_REQUEST,
    payload: searchdata,
  }
};
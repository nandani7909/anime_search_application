import { ActionTypes } from './animesActions';

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description animes Reducer.
 * @param       takes default and previous state value
 * @response    update a state value and store animes api response  
**/

const defaultState = {
  isanimes: false,
  data: undefined,
};

const animesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ANIMES_SEARCH_REQUEST:
      return {
        ...state,
        data: undefined,
        isanimes: true,
      };
    case ActionTypes.GET_ANIMES_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isanimes: false,
      };
    case ActionTypes.GET_ANIMES_SEARCH_FAILURE:
      return {
        ...state,
        isanimes: false,
        data: undefined,
        error: action.error,
      };
    default:
      return state;
  }
}

export default animesReducer;

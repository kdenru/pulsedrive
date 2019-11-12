import { FETCH_INFO, FETCH_INFO_SUCCESS, FETCH_INFO_ERROR } from './types'

export const initialState = { data: {}, isLoading: false, error: false }

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_INFO_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case FETCH_INFO_SUCCESS:
      return {
        error: false,
        isLoading: false,
        data: action.payload,
      }
    default:
      return state
  }
}

export default {}

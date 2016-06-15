/**
 * Import all the constants
 * we are going to use
 */
import {
  POPULATE_DATA_PENDING,
  POPULATE_DATA_SUCCESS,
  POPULATE_DATA_ERROR
} from '../actions';

/**
 * Create and export our state reducer
 */
export default function rootReducer(state, action) {
  switch (action.type) {
    case POPULATE_DATA_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
      });

    case POPULATE_DATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: null,
      });

    case POPULATE_DATA_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

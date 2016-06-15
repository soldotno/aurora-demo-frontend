/**
 * Import services we need
 * to fetch data from the API
 */
import getData from '../services/get-data';

/**
 * Constants for naming
 * and referencing action types
 */
export const POPULATE_DATA_PENDING = 'POPULATE_DATA_PENDING';
export const POPULATE_DATA_SUCCESS = 'POPULATE_DATA_SUCCESS';
export const POPULATE_DATA_ERROR = 'POPULATE_DATA_ERROR';

/**
 * Pending action for
 * populating the data
 */
function populateDataPending() {
  return {
    type: POPULATE_DATA_PENDING
  };
}

/**
 * Success action for
 * populating the data
 */
function populateDataSuccess(data) {
  return {
    type: POPULATE_DATA_SUCCESS,
    data,
  };
}

/**
 * Error action for
 * populating the data
 */
function populateDataError(error) {
  return {
    type: POPULATE_DATA_ERROR,
    error,
  };
}

/**
 * Exposed action creator
 * for populating the data of our module
 */
export function populateData(options) {
  return (dispatch) => {
    /**
     * Dispatch the pending action for
     * retrieving the data
     */
    dispatch(populateDataPending());

    /**
     * Initiate the request for retrieving
     * the data for our given input options
     */
    getData(options)
    .then((result) => {
      /**
       * Dispatch the success action of retrieving
       * the data, with the data as payload
       */
      dispatch(populateDataSuccess(result));
    })
    .catch((err) => {
      /**
       * Dispatch the error action of retrieving
       * the data when something fails,
       * with the error as payload
       */
      dispatch(populateDataError(err));
    });
  };
}

import axios from 'axios'

import { FETCH_INFO, FETCH_INFO_SUCCESS, FETCH_INFO_ERROR } from './types'

export const fetchInfo = query => (dispatch) => {
  dispatch({ type: FETCH_INFO });
  axios.post('https://glasswire.lapinet.ru/hosts/index.php', { query })
    .then(res => {
      dispatch({ type: FETCH_INFO_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_INFO_ERROR, payload: error });
    })
}

export default {}

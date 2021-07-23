import {
  HOME_LIST_FAIL,
  HOME_LIST_REQUEST,
} from '../constants/homeConstant';

export const listHome = () => async (dispatch) => {
  dispatch({
    type: HOME_LIST_REQUEST,
  });
  try {
  //  const { data } = await Axios.get('/api/products');
  //  dispatch({ type: HOME_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HOME_LIST_FAIL, payload: error.message });
  }
}

export default listHome
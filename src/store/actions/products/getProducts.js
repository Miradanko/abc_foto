import Actions from '../constans/constans';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
  dispatch({ type: Actions.FETCH_PRODUCTS_FOR_SEARCH_STRING, payload: [] });
  axios.get('/products')
    .then(res => {
      dispatch({ type: Actions.FETCH_PRODUCTS, payload: res.data });
    });
};
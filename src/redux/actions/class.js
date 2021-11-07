/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import { http } from '../../helpers/http';
const { REACT_APP_URL: URL } = process.env;
console.log(URL);

const getClass = (url) => {
  if (!url) {
    return async (dispatch) => {
      const {
        data
      } = await http().get(`${URL}/class`);
      dispatch({
        type: 'SET_GET_CLASS',
        payload: {
          classes: data.results,
          pageInfo: data.pageInfo
        },

      });
      console.log(data);
    };
  } else {
    return async (dispatch) => {
      const {
        data
      } = await http().get(url);
      dispatch({
        type: 'SET_NEXT_CLASS',
        payload: {
          classes: data.results,
          pageInfo: data.pageInfo
        },
      });
    };
  }
};

const getDetailClass = (id) => {
  return async (dispatch) => {
    const {
      data
    } = await http().get(`${URL}/class/${id}`);
    dispatch({
      type: 'SET_GET_DETAILS_CLASS',
      payload: data.results,
    });
    console.log('data: ', data);
  };
};

export {
  getClass,
  getDetailClass,
};
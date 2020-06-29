import axios from 'axios';
import AuthTypes from './auth.types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: AuthTypes.FETCH_USER,
    payload: res.data,
  });
};
export const handleToken = (token) => async (dispatch) => {
  const res = await axios({
    method: 'POST',
    url: '/api/stripe',
    data: {
      token,
    },
  });
  dispatch({
    type: AuthTypes.FETCH_USER,
    payload: res.data,
  });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  console.log(history);
  const res = await axios({
    method: 'POST',
    url: '/api/surveys',
    data: {
      values,
    },
  });
  history.push('/surveys');
  dispatch({
    type: AuthTypes.FETCH_USER,
    payload: res.data,
  });
};

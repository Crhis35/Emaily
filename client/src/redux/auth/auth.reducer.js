import AuthTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.FETCH_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;

import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import { reducer as reduxForm } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
});

export default rootReducer;

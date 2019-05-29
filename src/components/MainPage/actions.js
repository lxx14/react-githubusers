import { getUsers } from './service';
import { SET_USERS, START_FETCH_USERS, STOP_FETCH_USERS } from './constants';

export const startUsersFetchActionType = () => ({ type: START_FETCH_USERS })

export const stopUsersFetchActionType = () => ({ type: STOP_FETCH_USERS })

export const successUsersFetchActionType = (data) => ({ type: SET_USERS, data });



export const usersFetchAction = () => (dispatch) => {

  dispatch(startUsersFetchActionType());

  getUsers(10)
  .then(data => dispatch(successUsersFetchActionType(data.items)))
  .then(()=>setTimeout(()=>dispatch(stopUsersFetchActionType()), 2000));


}
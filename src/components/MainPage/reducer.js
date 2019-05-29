import { SET_USERS, START_FETCH_USERS, STOP_FETCH_USERS } from './constants';

const initialState = {
  users: [],
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_FETCH_USERS:
      return {
        ...state,
        isLoading: true
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.data]
      }
    case STOP_FETCH_USERS:
      return {
        ...state,
        isLoading: false
      }
  }



  return state;
};
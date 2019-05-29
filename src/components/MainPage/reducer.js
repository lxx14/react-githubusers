import { SET_USERS, START_FETCH_USERS, STOP_FETCH_USERS } from './constants';

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERS : 
    return {
      ...state,
      users: [...action.data]
    }
  }



  return state;
};
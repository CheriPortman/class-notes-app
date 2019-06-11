import { SET_SESSION } from '../actions/sessionActions';

const initialState = {
  username: '',
  token: '',
  image: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return action.payload;
    default: 
      return state;
  }
}

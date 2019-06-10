import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    case NEW_NOTE:
      return { ...state, loading: false, list: [...state.list, action.payload] };
    default: 
      return state;
  }
}

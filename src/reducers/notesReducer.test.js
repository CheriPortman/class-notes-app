import reducer from './notesReducer';
import { newNote, 
  NEW_NOTE_PENDING, 
  NEW_NOTE,
  FETCH_NOTES_PENDING,
  FETCH_NOTES  
} from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the NEW_NOTE_PENDING action', () => {
    const initialState = { 
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });
  
    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'heeeelo',
        body: 'nap'
      }
    });
    
    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'heeeelo', body: 'nap' }]
    });
  });

  it('handles the FETCH_NOTES_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the FETCH_NOTES action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES,
      payload: [{ title: 'hey', body: 'there' }]
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hey', body: 'there' }]
    });
  });
});

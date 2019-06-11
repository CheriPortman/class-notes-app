import { createAction } from 'promise-middleware-redux';
import { createNote, getNotes } from '../services/notes.Api';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING
] = createAction('FETCH_NOTES', getNotes);

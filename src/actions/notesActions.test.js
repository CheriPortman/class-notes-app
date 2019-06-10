import { newNote } from './notesActions';

jest.mock('../services/notes.Api.js', () => ({
  createNote() {
    return Promise.resolve([]);
  }
}));

describe('notes actions', () => {
  it('creates an action to create a note', () => {
    const noteAction = newNote({
      title: 'hey',
      body: 'so so tired'
    });

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

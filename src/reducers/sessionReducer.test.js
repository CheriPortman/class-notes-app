import reducer from './sessionReducer';

describe('session reducer', () => {
  it('handles the SET_SESSION action', () => {
    const newState = reducer(undefined, {
      type: 'SET_SESSION',
      payload: {
        username: 'test',
        image: 'image',
        token: 'token'
      }
    });

    expect(newState).toEqual({
      username: 'test',
      image: 'image',
      token: 'token'
    });
  });
});

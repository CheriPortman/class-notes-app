import React from 'react';
import CreateNote from '../containers/notes/CreateNote';
import AllNotes from '../containers/notes/AllNotes';

export default function Home() {
  return (
    <>
      <CreateNote />
      <AllNotes />
    </>
  );
}

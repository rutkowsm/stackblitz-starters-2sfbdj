import React from 'react';
import { useSyncExternalStore } from './externalDataStore';

function BookList() {
  const books = useSyncExternalStore();

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default BookList;

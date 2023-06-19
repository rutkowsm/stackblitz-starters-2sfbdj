import { useState, useEffect } from 'react';

const externalDataStore = {
  books: [
    { id: 1, title: 'Książka 1' },
    { id: 2, title: 'Książka 2' },
    { id: 3, title: 'Książka 3' },
  ],
  subscriptions: [],
  subscribe(callback) {
    this.subscriptions.push(callback);
    return () => {
      this.subscriptions = this.subscriptions.filter((sub) => sub !== callback);
    };
  },
  getSnapshot() {
    return this.books;
  },
};

export function useSyncExternalStore() {
  const [data, setData] = useState(externalDataStore.getSnapshot());

  useEffect(() => {
    const unsubscribe = externalDataStore.subscribe(() => {
      setData(externalDataStore.getSnapshot());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return data;
}
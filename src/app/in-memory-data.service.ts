import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 10, title: 'Harry Potter and the Sorcerer\'s Stone' },
      { id: 11, title: 'Harry Potter and the Chamber of Secrets' },
      { id: 12, title: 'Harry Potter and the Prisoner of Azkaban' },
      { id: 13, title: 'Harry Potter and the Goblet of Fire' },
      { id: 14, title: 'Harry Potter and the Order of the Phoenix' },
      { id: 15, title: 'Harry Potter and the Half-Blood Prince' },
      { id: 16, title: 'Harry Potter and the Deathly Hallows' },
      { id: 17, title: 'Sing, Unburried, Sing' },
      { id: 18, title: 'The Lazarus Project' },
      { id: 19, title: 'Autumn' },
      { id: 20, title: 'Nudge' }
    ];
    return {books};
  }
}
// this is supposed to replace sample-books.ts, but when I delete sample-books.ts, it crashes.

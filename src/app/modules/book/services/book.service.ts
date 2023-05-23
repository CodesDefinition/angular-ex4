import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'A Walk to Remember',
      authors: ['Nicholas Sparks'],
      isbn: 'NS-1221-001',
    },
    {
      id: 2,
      name: 'The Longest Ride',
      authors: ['Nicholas Sparks'],
      isbn: 'NS-1222-002',
    },
    {
      id: 3,
      name: 'Dear John',
      authors: ['Nicholas Sparks'],
      isbn: 'NS-1223-003',
    },
    {
      id: 4,
      name: 'Message in a Bottle',
      authors: ['Nicholas Sparks'],
      isbn: 'NS-1224-004',
    },
    {
      id: 5,
      name: 'The Notebook',
      authors: ['Nicholas Sparks'],
      isbn: 'NS-1225-005',
    },
  ];
  getBooks = (): Book[] => {
    return this.books;
  };
  constructor() {}
}

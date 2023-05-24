import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getBooks = () => {
    return this.http.get<Book[]>(`${this.serverUrl}/books`);
  };

  createBook = (book: Book) => {
    return this.http.post(`${this.serverUrl}/books`, book);
  };

  updateBook = (id: number, book: Book) => {
    return this.http.put(`${this.serverUrl}/books/${id}`, book);
  };

  delBook = (id: number) => {
    return this.http.delete(`${this.serverUrl}/books/${id}`);
  };
}

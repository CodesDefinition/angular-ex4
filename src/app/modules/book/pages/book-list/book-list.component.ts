import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    });
  }

  id: number = 0;
  constructor(private bookService: BookService) {}
  getBooks = () => {
    return this.books;
  };
  getBookId = (id: number) => {
    this.id = id;
  };
}

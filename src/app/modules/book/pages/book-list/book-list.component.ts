import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  id: number = 0;
  constructor(private bookService: BookService) {}
  getBooks = () => {
    return this.bookService.getBooks();
  };
  getBookId = (id: number) => {
    this.id = id;
  };
}

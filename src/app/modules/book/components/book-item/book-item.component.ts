import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookListComponent } from '../../pages/book-list/book-list.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input('bookInput') book: Book | undefined;
  @Output() actionEmiter: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    public bookService: BookService,
    private booklist: BookListComponent
  ) {}
  handleEdit = (id: number) => {
    this.actionEmiter.emit(this.book?.id);
    console.log('Update Book id: ', id);
    this.router.navigate(['/book/form'], {
      queryParams: {
        id: this.book?.id,
        name: this.book?.name,
        authors: this.book?.authors,
        isbn: this.book?.isbn,
      },
    });
  };
  handleDelete = (id: number) => {
    this.actionEmiter.emit(this.book?.id);
    console.log('Delete Book id: ', id);
    const checker = window.confirm(
      'Are you sure you want to delete this item?'
    );
    console.log(checker);

    if (checker) {
      this.bookService.delBook(id).subscribe();
      this.booklist.books = this.booklist.books.filter((blog) => {
        if (blog.id == id) {
          return false;
        } else {
          return true;
        }
      });
    }
  };
}

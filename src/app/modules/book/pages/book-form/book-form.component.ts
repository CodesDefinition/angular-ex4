import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorsArr: FormArray;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.queryParams['id'];
    const name = activatedRoute.snapshot.queryParams['name'];
    const authors = activatedRoute.snapshot.queryParams['authors'];
    const isbn = activatedRoute.snapshot.queryParams['isbn'];
    this.bookForm = fb.group({
      id: id || bookService.getBooks().length + 1,
      name: [name || '', [Validators.required]],
      authors: fb.array(authors || []),
      isbn: [isbn || '', [Validators.required, Validators.minLength(12)]],
    });
    this.authorsArr = this.bookForm.controls['authors'] as FormArray;
  }
  onSubmit = () => {
    if (this.bookForm.valid) {
      this.bookService.books = this.bookService.getBooks().filter((book) => {
        if (this.bookForm.get('id')?.value == book.id) {
          return false;
        } else {
          return true;
        }
      });
      this.bookService.books.push(this.bookForm.value);
      this.bookForm.reset();
      // console.log(this.bookForm.value);
      // this.bookService.books.push(this.bookForm.value);
      // console.log(this.bookService.getBooks());
      // this.bookForm.reset();
    }
  };
  addAuthor = () => {
    this.authorsArr.push(new FormControl());
    console.log(this.authorsArr.value);
  };
  delAuthor = (id: number) => {
    this.authorsArr.removeAt(id);
  };
}

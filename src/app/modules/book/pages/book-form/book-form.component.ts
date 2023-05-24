import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const name = activatedRoute.snapshot.queryParams['name'];
    const authors = activatedRoute.snapshot.queryParams['authors'];
    const isbn = activatedRoute.snapshot.queryParams['isbn'];
    this.bookForm = fb.group({
      name: [name || '', [Validators.required]],
      authors: fb.array(authors || []),
      isbn: [isbn || '', [Validators.required, Validators.minLength(12)]],
    });
    this.authorsArr = this.bookForm.controls['authors'] as FormArray;
  }
  id = this.activatedRoute.snapshot.queryParams['id'];
  onSubmit = () => {
    console.log(this.bookForm.value);

    if (this.bookForm.valid) {
      if (this.id) {
        this.bookService.updateBook(this.id, this.bookForm.value).subscribe();
        this.router.navigate(['/book']);
      } else {
        this.bookService.createBook(this.bookForm.value).subscribe();
        this.bookForm.reset();
        this.router.navigate(['/book']);
      }
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

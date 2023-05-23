import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { BookService } from 'src/app/modules/book/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private _router: Router,
    private bookService: BookService,
    private blogService: BlogService
  ) {}
  edit = () => {
    this._router.navigate([`${this._router.url}/form`]);
  };

  delete = () => {};
}

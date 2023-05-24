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
  getRouter = () => {
    return this._router;
  };
  edit = () => {
    if (
      !(
        this._router.url == '/profile' ||
        this._router.url == '/book/form' ||
        this._router.url == '/blog/form'
      )
    ) {
      this._router.navigate([`${this._router.url}/form`]);
    }
  };

  delete = () => {};
}

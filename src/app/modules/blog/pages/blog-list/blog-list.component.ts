import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  id: number = 0;
  constructor(private blogService: BlogService) {}
  getBlogs = () => {
    return this.blogService.getBlogs();
  };
  getBlogId = (id: number) => {
    this.id = id;
  };
}

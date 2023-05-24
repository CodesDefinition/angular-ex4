import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blog) => {
      this.blogs = blog;
    });
  }
  id: number = 0;
  constructor(private blogService: BlogService) {}
  getBlogs = () => {
    return this.blogs;
  };
  getBlogId = (id: number) => {
    this.id = id;
  };
}

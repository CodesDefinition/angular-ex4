import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogListComponent } from '../../pages/blog-list/blog-list.component';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;
  @Output() actionEmitter: EventEmitter<Blog> = new EventEmitter<Blog>();

  constructor(
    private router: Router,
    private blogService: BlogService,
    private bloglist: BlogListComponent
  ) {}

  handleEdit = (id: number) => {
    this.actionEmitter.emit(this.blog);
    console.log('Update Blog id: ', id);
    this.router.navigate(['/blog/form'], {
      queryParams: {
        id: this.blog?.id,
        title: this.blog?.title,
        author: this.blog?.author,
        description: this.blog?.description,
        comments: this.blog?.comments,
      },
    });
  };
  handleDelete = (id: number) => {
    this.actionEmitter.emit(this.blog);
    console.log('Delete Blog id: ', id);
    const checker = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (checker) {
      this.blogService.delBlog(id).subscribe();
      this.bloglist.blogs = this.bloglist.blogs.filter((blog) => {
        if (blog.id == id) {
          return false;
        } else {
          return true;
        }
      });
    }
  };
}

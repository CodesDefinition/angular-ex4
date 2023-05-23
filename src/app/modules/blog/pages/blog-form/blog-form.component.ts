import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArr: FormArray;
  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.queryParams['id'];
    const title = activatedRoute.snapshot.queryParams['title'];
    const author = activatedRoute.snapshot.queryParams['author'];
    const comments = activatedRoute.snapshot.queryParams['comments'];
    const description = activatedRoute.snapshot.queryParams['description'];
    this.blogForm = fb.group({
      id: id || this.blogService.getBlogs.length + 1,
      title: [title || '', [Validators.required, Validators.minLength(24)]],
      description: [
        description || '',
        [Validators.required, Validators.minLength(100)],
      ],
      author: [author || '', Validators.required],
      comments: fb.array(comments || []),
    });
    this.commentsArr = this.blogForm.controls['comments'] as FormArray;
    console.log(activatedRoute.snapshot.queryParams);
  }
  onSubmit = () => {
    if (this.blogForm.valid) {
      this.blogService.blogs = this.blogService.getBlogs().filter((blog) => {
        if (this.blogForm.get('id')?.value == blog.id) {
          return false;
        } else {
          return true;
        }
      });
      this.blogService.blogs.push(this.blogForm.value);
      this.blogForm.reset();
      // console.log(this.blogForm.value);
      // this.blogService.blogs.push(this.blogForm.value);
      // this.blogForm.reset();
    }
  };
  addComment = () => {
    this.commentsArr.push(new FormControl());
  };
  delComment = (id: number) => {
    this.commentsArr.removeAt(id);
  };
}

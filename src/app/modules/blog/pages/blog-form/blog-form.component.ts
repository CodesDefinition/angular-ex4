import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const title = activatedRoute.snapshot.queryParams['title'];
    const author = activatedRoute.snapshot.queryParams['author'];
    const comments = activatedRoute.snapshot.queryParams['comments'];
    const description = activatedRoute.snapshot.queryParams['description'];
    this.blogForm = fb.group({
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
  id = this.activatedRoute.snapshot.queryParams['id'];
  onSubmit = () => {
    if (this.blogForm.valid) {
      if (this.id) {
        this.blogService.updateBlog(this.id, this.blogForm.value).subscribe();
        this.router.navigate(['/blog']);
      } else {
        this.blogService.createBlog(this.blogForm.value).subscribe();
        this.blogForm.reset();
        this.router.navigate(['/blog']);
      }
    }
  };
  addComment = () => {
    this.commentsArr.push(new FormControl());
  };
  delComment = (id: number) => {
    this.commentsArr.removeAt(id);
  };
}

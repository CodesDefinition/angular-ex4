import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // Credits to: Internet Society Org
  serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getBlogs = () => {
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`);
  };
  createBlog = (blog: Blog) => {
    return this.http.post(`${this.serverUrl}/blogs`, blog);
  };

  updateBlog = (id: number, blog: Blog) => {
    return this.http.put(`${this.serverUrl}/blogs/${id}`, blog);
  };

  delBlog = (id: number) => {
    return this.http.delete(`${this.serverUrl}/blogs/${id}`);
  };
}

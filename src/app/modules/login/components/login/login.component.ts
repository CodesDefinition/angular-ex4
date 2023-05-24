import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(24),
        ],
      ],
    });
  }
  handleSubmit = () => {
    console.log(this.userForm.value);
    this.userForm.reset();
  };
}

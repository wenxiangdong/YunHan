import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../../../services/utils/logger.service';
import { UserService } from '../../../services/api/user.service';
import { BaseHttpService } from '../../../services/api/base-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private TAG = 'LoginComponent';

  /* model */
  loginForm: FormGroup;
  loginLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private userService: UserService,
    private http: BaseHttpService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });
    this.loginLoading = false;
    this.http.get('/api/hello').subscribe(res => {
      this.logger.info(this.TAG, res);
    });
  }

  /* handler */
  onClickLogin() {
    // this.loginLoading = true;
    const form = this.loginForm;
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    this.logger.info(this.TAG, `login`, this.loginForm.value);
  }

}

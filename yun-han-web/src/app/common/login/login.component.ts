import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../../../services/utils/logger.service';
import { UserService } from '../../../services/api/user.service';
import { BaseHttpService } from '../../../services/api/base-http.service';
import { ResultMessage } from '../../../types/enums/result-message';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private TAG = 'LoginComponent';

  private USERNAME = 'username';
  private PASSWORD = 'password';

  /* model */
  loginForm: FormGroup;
  loginLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private userService: UserService,
    private http: BaseHttpService,
    private router: Router,
    private messageService: NzMessageService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      [this.USERNAME]: ['', [Validators.required]],
      [this.PASSWORD]: ['', [Validators.required]],
      remember: [true]
    });
    this.loginLoading = false;
  }

  /* handler */
  async onClickLogin() {
    const form = this.loginForm;
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    this.logger.info(this.TAG, `login`, this.loginForm.value);
    if (!form.valid) {
      return;
    } else {
      this.loginLoading = true;
      try {
        let res = await this.userService.signIn(
          form.value[this.USERNAME], form.value[this.PASSWORD]
        );
        await this.router.navigateByUrl('/index');
      } catch (e) {
        this.logger.error(this.TAG, e);
        this.messageService.error(`登陆失败\n${e.message}`);
      } finally {
        this.loginLoading = false;
      }
    }
  }

}

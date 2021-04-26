import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@moduleshared/service/login.service';
import { NotificationService } from '../shared/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  FormLogin: FormGroup;
  constructor(private fb: FormBuilder, private notificationService: NotificationService, private router: Router, private loginService: LoginService) {

    this.FormLogin = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.loginService.Login(this.FormLogin.value.user, this.FormLogin.value.password).subscribe(res => {
      console.log(res)
      if(res.length==0){
        this.notificationService.NotificationPermits()
      }else{
      localStorage.setItem('auth_token', res[0].token);
      this.router.navigateByUrl('/home')
      }
    }, err => {

    })
  }


}

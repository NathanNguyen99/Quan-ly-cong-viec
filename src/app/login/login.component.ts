import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from './../Shared/Services/token.service';

import { Auth } from './../Auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  submitted = false;
  loginForm:any;
  isLoading = false;
  errormgs : string | undefined;
  constructor(
    private auth: Auth,
    private router: Router,
    //private route: ActivatedRoute,
    private tokenService: TokenService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  login(): void {
    this.isLoading = true;
    this.errormgs ="";     
    let authValues = {"Username":this.f.username.value, "Password":this.f.password.value};
    //let authValues = {"Username":"admin", "Password":"20@21"};
    this.tokenService.authorization(authValues).subscribe((token: any) => {
      
      this.isLoading = false;
      this.auth.setToken(token);
      this.router.navigate(['/home']);      
      
    }, (error: { status: number; }) => {
      
      if (error.status===0)
        this.errormgs ="Không kết nối được đến server";
      if (error.status===401)
        this.errormgs ="Sai tên người dùng hoặc mật khẩu";
      
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.login();
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './../Auth/auth';
@Component({
  selector: 'app-logout',
  template:'<ng-content></ng-content>' 
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private auth: Auth) { }
  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
import { Component, OnInit } from '@angular/core';
import { Auth } from '../Auth/auth';
import { NavService } from '../Shared/Services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(public navService: NavService, public auth: Auth) {
  }

  _opened: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  tongleNav(){
  }

  logout() {
    this.auth.logout();    
  }
}

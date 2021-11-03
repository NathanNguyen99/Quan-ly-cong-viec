import { Component, OnInit } from '@angular/core';
import { Auth } from '../Auth/auth';
import { NavService } from '../Shared/Services/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

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

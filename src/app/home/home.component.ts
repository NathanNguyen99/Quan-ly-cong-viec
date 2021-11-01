import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  _opened: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}

import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  config = {
    paddingAtStart: true,
    classname: 'menu-items',
    selectedListFontColor: '#007cce',
  };

  selectedItem(selectedData: any) {
    this._toggleSidebar()
  }

  
  appitems = [
    {
      label: 'Dashboard',
      link: '/home/dashboard'
    },
    {
      label: 'Nghiệp vụ',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
        }
      ]
    },
    {
      label: 'Danh mục',
      items: [
        {
          label: 'Phòng ban',
          link: '/item-2-1',
        },
        {
          label: 'Nhân viên',
          link: '/item-2-2',
        }
      ]
    },
    {
      label: 'Hệ thống',
      link: '/item-4',
    }
  ];

}

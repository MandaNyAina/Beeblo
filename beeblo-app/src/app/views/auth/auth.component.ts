import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Acceuil', url: '/homepage'},
      {label:'Mon compte'},
      {label:'Se connecter'}
    ];
  }

  onResized(e: ResizedEvent) {
    // console.log(e);
  }

}

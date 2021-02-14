import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.display = false;
      }
    });
  }

  ngOnInit() {
  }

}

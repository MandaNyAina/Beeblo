import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-fixed',
  templateUrl: './footer-fixed.component.html',
  styleUrls: ['./footer-fixed.component.scss']
})
export class FooterFixedComponent implements OnInit {
  annee: number = (new Date()).getFullYear();
  constructor() { }

  ngOnInit() {
  }

}

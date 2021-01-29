import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beeblo-info',
  templateUrl: './beeblo-info.component.html',
  styleUrls: ['./beeblo-info.component.scss'],
})
export class BeebloInfoComponent implements OnInit {
  header: Array<any>;
  constructor() { }

  ngOnInit() {
    this.header = [
      {
        key: "name",
        name: "Name",
        filter: true
      },
      {
        key: "first_name",
        name: "First Name",
        filter: true
      },
      {
        key: "age",
        name: "Age",
        filter: false
      }
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beeblo-info',
  templateUrl: './beeblo-info.component.html',
  styleUrls: ['./beeblo-info.component.scss'],
})
export class BeebloInfoComponent implements OnInit {
  formData: string;
  constructor() { }

  ngOnInit() {
  }

  test(e) {
    console.log(e);
  }

}

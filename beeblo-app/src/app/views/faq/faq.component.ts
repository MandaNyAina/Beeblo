import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  question: string;
  data?: Array<any>;
  page: number;
  constructor() { }

  ngOnInit() {
  }

  onSearch($event) {
    if ($event.type === 'change' && this.question) {
      console.log(this.question);
    }
  }

  onChangePage(event) {
    this.page = event.page;
  }

}

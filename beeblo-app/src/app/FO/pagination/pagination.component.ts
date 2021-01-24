import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() block: number;
  @Input() length: number;
  @Input() max: number;
  @Input() current: number;
  @Output() setPage = new EventEmitter();
  currentPage: number = 1;
  pages: Array<any>;
  constructor() { }

  ngOnInit() {
    this.generatePage(1);
  }

  generatePage(begin: number): void {
    this.pages = [];
    let length = this.length;

    const addToPages = (begin: number, end: number) => {
      while (begin <= end) {
        this.pages.push(begin);
        begin++;
      }
    }

    if (length <= this.max) {
      addToPages(1, length);
    } else {
      if (begin <= 2) {
        addToPages(1, (this.max / 2));
        this.pages.push("...");
        addToPages(length - 1, length);
      } else if (begin > (length - this.max + 2)) {
        addToPages(length - this.max + 1, length);
      } else {
        addToPages(begin-1, begin+1);
        this.pages.push("...");
        addToPages(length - 1, length);
      }
    }
  }

  onPagine(value: number):void {
    this.currentPage = value;
    this.generatePage(value);
    this.setPage.emit({page: value});
    window.scroll(0,0);
  }

}

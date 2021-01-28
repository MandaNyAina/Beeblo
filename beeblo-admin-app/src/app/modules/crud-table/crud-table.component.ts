import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `]
})
export class CrudTableComponent implements OnInit {
  selectedProducts: Array<any>;
  products: Array<any>;
  delete: any;
  constructor() { }

  ngOnInit() {
  }

  openNew() {

  }

  deleteSelectedProducts() {

  }

}

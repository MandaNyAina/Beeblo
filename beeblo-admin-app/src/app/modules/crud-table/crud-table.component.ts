import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

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
  @Input() title: string;
  @Input() header: Array<any>;
  @Input() data: any;
  @Input() loading: boolean;

  filterField: Array<any> = [];
  selectedData: Array<any>;
  delete: any;
  totalRecords: number;
  cols: Array<any>;
  searchValue: string;
  
  @Output() reloadTable = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.filterField.push(this.header.map(el => { return el.key }));
  }

  reloadData(e: LazyLoadEvent) {
    this.reloadTable.emit(e);
  }

  openNew() {
    this.onAdd.emit();
  }

  onSearch() {
    let new_data = [];
    this.data.filter(el => {
      if (el.includes(this.searchValue)) new_data.push(el);
    })
    this.data = new_data;
  }

  deleteSelecteData() {
    this.onDelete.emit(this.selectedData);
    this.selectedData = null;
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Acheteur } from '../../interface/acheteur';
import { Header } from '../../interface/header';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {
  @Input() title: string;
  @Input() header: Array<Header>;
  @Input() data: Array<any>;
  @Input() loading: boolean;

  filterField: Array<any> = [];
  globalFilter: Array<String>;
  selectedData: Array<any>;
  delete: any;
  totalRecords: number;
  cols: Array<any>;
  searchValue: string;
  isDialog: boolean = false;

  @Output() reloadTable = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.filterField = this.header.map(el => { return {key: el.key } });
    this.globalFilter = this.header.map(el => { return `${el.key}` });

  }

  reloadData(e: LazyLoadEvent | string) {
    this.reloadTable.emit(e);
  }

  openNew() {
    this.onAdd.emit();
  }

  onEditLine(data: Acheteur) {
    this.onEdit.emit(data);
  }

  onSearch() {
    if (!this.searchValue) {
      this.reloadData("")
    } else {
      const new_data = [];
      this.data.filter(elements => {
        Object.values(elements).filter((value: string) => {
          if (typeof value == 'string') {
            if (value.toLowerCase().includes(this.searchValue.toLowerCase())) {
              if (!new_data.includes(elements)) new_data.push(elements);
            }
          }
        })
      });

      this.data = new_data;

    }
  }

  deleteOnRow(data: Acheteur) {

    this.confirmationService.confirm({
      message: 'Etes-vous sur de supprimer l\'element selectionne ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.onDelete.emit(data);
          this.isDialog = false;
      },
      reject: () => {
        this.isDialog = false;
      }
    });
  }

}

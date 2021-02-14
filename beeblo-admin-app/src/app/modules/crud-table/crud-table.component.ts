import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
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
  @Output() onDeleteSelected = new EventEmitter();
  @Output() onDeleteLine = new EventEmitter();
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.filterField = this.header.map(el => { return {key: el.key } });
    this.globalFilter = this.header.map(el => { return `${el.key}` });

  }

  reloadData(e: LazyLoadEvent) {
    this.reloadTable.emit(e);
  }

  openNew() {
    this.onAdd.emit();
  }

  onEditLine(data: Object) {
    this.onEdit.emit(data);
  }

  onSearch() {
    let new_data = [];
    this.data.filter(el => {
      if (el.includes(this.searchValue)) new_data.push(el);
    })
    this.data = new_data;
  }

  deleteOnRow(data: Object) {

    this.confirmationService.confirm({
      message: 'Etes-vous sur de supprimer l\'element selectionne ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.onDeleteLine.emit(data);
          this.selectedData = null;
          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Element supprime', life: 3000});
          this.isDialog = false;
      },
      reject: () => {
        this.isDialog = false;
      }
    });
  }


  deleteSelecteData() {
    this.confirmationService.confirm({
      message: 'Etes-vous sur de supprimer l\'element selectionne ?',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.onDeleteSelected.emit(this.selectedData);
          this.selectedData = null;
          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Element supprime', life: 3000});
          this.isDialog = false;
      },
      reject: () => {
        this.isDialog = false;
      }
    });

  }

}

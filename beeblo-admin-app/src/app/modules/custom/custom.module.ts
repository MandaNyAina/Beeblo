import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { SubmitComponent } from '../submit/submit.component';
import { EditorComponent } from '../editor/editor.component';
import { CrudTableComponent } from '../crud-table/crud-table.component';
import { DefaultPipe } from '../../pipe/default.pipe';
import { StatusPipe } from '../../pipe/status.pipe';
import { BooleanPipe } from '../../pipe/boolean.pipe';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ModalAcheteurComponent } from '../modal/modal-acheteur/modal-acheteur.component';
import { ReactiveFormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    InputTextModule,
    DynamicDialogModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    EditorModule,
    FormsModule,
    InputTextModule,
    DynamicDialogModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    SubmitComponent,
    EditorComponent,
    CrudTableComponent,
    ModalAcheteurComponent,
    DefaultPipe,
    StatusPipe,
    BooleanPipe,
    ConfirmDialogModule,
    ConfirmPopupModule,
    InputSwitchModule
  ],
  declarations: [
    SubmitComponent,
    EditorComponent,
    CrudTableComponent,
    ModalAcheteurComponent,
    DefaultPipe,
    StatusPipe,
    BooleanPipe
  ]
})
export class CustomModule { }

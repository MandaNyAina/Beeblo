import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    ConfirmPopupModule
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
    DefaultPipe,
    StatusPipe,
    BooleanPipe,
    ConfirmDialogModule,
    ConfirmPopupModule
  ],
  declarations: [SubmitComponent, EditorComponent, CrudTableComponent, DefaultPipe, StatusPipe, BooleanPipe]
})
export class CustomModule { }

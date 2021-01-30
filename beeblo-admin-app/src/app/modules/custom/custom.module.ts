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

@NgModule({
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
  ],
  declarations: []
})
export class CustomModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SubmitComponent } from '../submit/submit.component';

@NgModule({
  exports: [
    CommonModule,
    EditorModule,
    FormsModule,
    InputTextModule
  ],
  declarations: []
})
export class CustomModule { }

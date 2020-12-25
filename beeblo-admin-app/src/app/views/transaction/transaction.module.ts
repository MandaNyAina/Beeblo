import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutes } from './transaction.routing';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutes
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users.routing';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { UsersPrivilegesComponent } from './users-privileges/users-privileges.component';
import { CustomModule } from '../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CustomModule
  ],
  declarations: [UsersCrudComponent, UsersPrivilegesComponent]
})
export class UsersModule { }

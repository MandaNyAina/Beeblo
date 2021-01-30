import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users.routing';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { UsersPrivilegesComponent } from './users-privileges/users-privileges.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UsersCrudComponent, UsersPrivilegesComponent]
})
export class UsersModule { }

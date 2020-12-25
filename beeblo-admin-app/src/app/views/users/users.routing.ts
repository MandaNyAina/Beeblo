import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { UsersPrivilegesComponent } from './users-privileges/users-privileges.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateur'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'manage',
        component: UsersCrudComponent,
        data: {
          title: 'Gestion utilisateur'
        }
      },
      {
        path: 'grant',
        component: UsersPrivilegesComponent,
        data: {
          title: 'Droit et privilège'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
